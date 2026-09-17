import { test } from '@playwright/test';
import { PlacesPage } from '../page-objects/PlacesPage';

test('Places page displays photo images', async ({ page }) => {
  const placesPage = new PlacesPage(page);

  await placesPage.goto();
  await placesPage.waitForLoaded();
  await placesPage.verifyHeader();
  await placesPage.verifyNumOfPhotos(15);
  await placesPage.verifyPhotosDisplayed(15);
});