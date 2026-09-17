import 'dotenv/config';
import { google } from 'googleapis';

export type ParsedMail = {
  subject?: string;
  text?: string;
};

type VerifySubscriptionEmailOptions = {
  recipient: string;
  subjectContains?: string;
  bodyContains?: string;
  timeoutMs?: number;
};

export async function verifySubscriptionEmail({
  recipient,
  subjectContains,
  bodyContains,
  timeoutMs = 30000,
}: VerifySubscriptionEmailOptions): Promise<ParsedMail> {
  const user = process.env.GMAIL_EMAIL;
  const clientId = process.env.GMAIL_CLIENT_ID;
  const clientSecret = process.env.GMAIL_CLIENT_SECRET;
  const refreshToken = process.env.GMAIL_REFRESH_TOKEN;

  if (!user || !clientId || !clientSecret || !refreshToken) {
    throw new Error(
      'GMAIL_EMAIL, GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, and GMAIL_REFRESH_TOKEN must be set in .env'
    );
  }

  const auth = new google.auth.OAuth2(clientId, clientSecret);
  auth.setCredentials({ refresh_token: refreshToken });

  const gmail = google.gmail({
    version: 'v1',
    auth,
  });
  const startedAt = Date.now();
  const after = Math.floor((startedAt - 5 * 60 * 1000) / 1000);

  while (Date.now() - startedAt < timeoutMs) {
    const response = await gmail.users.messages.list({
      userId: 'me',
      q: `in:inbox to:${recipient} after:${after}`,
    });
    const messages = response.data.messages ?? [];

    for (const message of messages) {
      if (!message.id) {
        continue;
      }

      const emailResponse = await gmail.users.messages.get({
        userId: 'me',
        id: message.id,
        format: 'full',
      });
      const email = toParsedMail(emailResponse.data);
      const subjectMatches = !subjectContains || email.subject?.includes(subjectContains);
      const bodyMatches = !bodyContains || email.text?.includes(bodyContains);

      if (subjectMatches && bodyMatches) {
        return email;
      }
    }

    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  throw new Error(
    `Expected a subscription email sent to ${recipient}, but none matching the requested criteria was found within ${timeoutMs}ms`
  );
}

function toParsedMail(message: { payload?: GmailMessagePart; snippet?: string | null }): ParsedMail {
  const subject = message.payload?.headers?.find(header => header.name?.toLowerCase() === 'subject')?.value ?? undefined;
  const text = findTextPart(message.payload) || message.snippet || '';

  return { subject, text };
}

function findTextPart(part?: GmailMessagePart): string {
  if (!part) {
    return '';
  }

  if (part.mimeType === 'text/plain' && part.body?.data) {
    return Buffer.from(part.body.data, 'base64url').toString('utf8');
  }

  for (const child of part.parts ?? []) {
    const text = findTextPart(child);
    if (text) {
      return text;
    }
  }

  return '';
}

type GmailMessagePart = {
  mimeType?: string | null;
  headers?: Array<{ name?: string | null; value?: string | null }>;
  body?: { data?: string | null } | null;
  parts?: GmailMessagePart[] | null;
};