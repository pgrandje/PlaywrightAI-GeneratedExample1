import { expect } from '@playwright/test';
import { _BasePage } from './_BasePage';

export class SubscribePage extends _BasePage {
  async goto() {
    await this.page.goto('https://paulgrandjeanphotography.com/contact-me/', { waitUntil: 'domcontentloaded' });
  }

  async waitForLoaded() {
    await expect(this.page).toHaveURL(/\/contact-me\/?$/, { timeout: 15000 });
  }

  async fillForm(name: string, email: string, comment: string) {
    await this.page.locator('#g205-name').fill(name);
    await this.page.locator('#g205-email').fill(email);
    await this.page.locator('#contact-form-comment-g205-comment').fill(comment);
  }

  async submitForm(name: string, email: string, comment: string) {
    const requestPromise = this.page.waitForRequest(request =>
      request.method() === 'POST' && request.url() === 'https://paulgrandjeanphotography.com/contact-me/'
    );
    await this.page.getByRole('button', { name: 'Submit', exact: true }).click();

    const request = await requestPromise;
    const requestData = new URLSearchParams(request.postData() ?? '');
    expect(requestData.get('g205-name')).toBe(name);
    expect(requestData.get('g205-email')).toBe(email);
    expect(requestData.get('g205-comment')).toBe(comment);
  }

  async verifyAcknowledgement() {
    await expect(this.page.getByRole('heading', { name: /Thank you for your response/ })).toBeVisible();
  }
}
