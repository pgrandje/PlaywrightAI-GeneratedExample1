import { test } from '../fixtures/baseTest';

test('Nature page displays photo images', async ({ naturePage }) => {
  await naturePage.goto();
  await naturePage.waitForLoaded();
  await naturePage.verifyHeader();
  await naturePage.verifyNumOfPhotos(19);
  await naturePage.verifyPhotosDisplayed(19);
});