import { test } from '../fixtures/baseTest';

test('People page displays photo images', async ({ peoplePage }) => {
  await peoplePage.goto();
  await peoplePage.waitForLoaded();
  await peoplePage.verifyHeader();
  await peoplePage.verifyNumOfPhotos(8);
  await peoplePage.verifyPhotosDisplayed(8);
});