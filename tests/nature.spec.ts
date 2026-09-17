import { test } from '@playwright/test';
import { NaturePage } from '../page-objects/NaturePage';

test('Nature page displays photo images', async ({ page }) => {
  const naturePage = new NaturePage(page);

  await naturePage.goto();
  await naturePage.waitForLoaded();
  await naturePage.verifyHeader();
  await naturePage.verifyNumOfPhotos(19);
  await naturePage.verifyPhotosDisplayed(19);
});