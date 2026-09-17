import { test } from '@playwright/test';
import { PeoplePage } from '../page-objects/PeoplePage';

test('People page displays photo images', async ({ page }) => {
  const peoplePage = new PeoplePage(page);

  await peoplePage.goto();
  await peoplePage.waitForLoaded();
  await peoplePage.verifyHeader();
  await peoplePage.verifyNumOfPhotos(8);
  await peoplePage.verifyPhotosDisplayed(8);
});