import { test } from '../fixtures/baseTest';

test('Places page displays photo images', async ({ placesPage }) => {
  await placesPage.goto();
  await placesPage.waitForLoaded();
  await placesPage.verifyHeader();
  await placesPage.verifyNumOfPhotos(15);
  await placesPage.verifyPhotosDisplayed(15);
});