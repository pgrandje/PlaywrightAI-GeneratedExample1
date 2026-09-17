import { test } from '@playwright/test';
import { ThingsPage } from '../page-objects/ThingsPage';

test('Things page displays photo images', async ({ page }) => {
  const thingsPage = new ThingsPage(page);

  await thingsPage.goto();
  await thingsPage.waitForLoaded();
  await thingsPage.verifyHeader();
  await thingsPage.verifyNumOfPhotos(6);
  await thingsPage.verifyPhotosDisplayed(6);
});