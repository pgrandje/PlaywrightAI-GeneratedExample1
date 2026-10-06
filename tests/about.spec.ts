import { test } from '../fixtures/baseTest';

test('About page displays its content', async ({ aboutPage }) => {
  await aboutPage.goto();
  await aboutPage.waitForLoaded();
  await aboutPage.verifyHeader();
  await aboutPage.verifyText();
});