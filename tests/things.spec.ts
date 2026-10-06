import { test } from '../fixtures/baseTest';

test('Things page displays photo images', async ({ thingsPage }) => {
  await thingsPage.goto();
  await thingsPage.waitForLoaded();
  await thingsPage.verifyHeader();
  await thingsPage.verifyNumOfPhotos(6);
  await thingsPage.verifyPhotosDisplayed(6);
});