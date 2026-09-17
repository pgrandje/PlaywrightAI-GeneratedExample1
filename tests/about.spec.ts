import { test } from '@playwright/test';
import { AboutPage } from '../page-objects/AboutPage';

test('About page displays its content', async ({ page }) => {
  const aboutPage = new AboutPage(page);

  await aboutPage.goto();
  await aboutPage.waitForLoaded();
  await aboutPage.verifyHeader();
  await aboutPage.verifyText();
});