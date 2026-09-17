import { test } from '@playwright/test';
import { SubscribePage } from '../page-objects/SubscribePage';

test('Subscribe page loads and displays its header', async ({ page }) => {
  const subscribePage = new SubscribePage(page);

  await subscribePage.goto();
  await subscribePage.waitForLoaded();
  await subscribePage.verifyHeader();
});

test('User subscribes with email address', async ({ page }) => {
  const subscribePage = new SubscribePage(page);
  const name = 'Playwright Test User';
  const email = 'playwright-test@example.com';
  const comment = 'Testing the subscription form.';

  await subscribePage.goto();
  await subscribePage.waitForLoaded();
  await subscribePage.fillForm(name, email, comment);
  await subscribePage.submitForm(name, email, comment);
  await subscribePage.verifyAcknowledgement();
});
