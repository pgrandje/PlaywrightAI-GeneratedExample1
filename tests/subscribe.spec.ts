import { test } from '../fixtures/baseTest';

test('Subscribe page loads and displays its header', async ({ subscribePage }) => {
  await subscribePage.goto();
  await subscribePage.waitForLoaded();
  await subscribePage.verifyHeader();
});

test('User subscribes with email address', async ({ subscribePage }) => {
  const name = 'Playwright Test User';
  const email = 'playwright-test@example.com';
  const comment = 'Testing the subscription form.';

  await subscribePage.goto();
  await subscribePage.waitForLoaded();
  await subscribePage.fillForm(name, email, comment);
  await subscribePage.submitForm(name, email, comment);
  await subscribePage.verifyAcknowledgement();
});
