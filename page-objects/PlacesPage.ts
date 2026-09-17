import { expect } from '@playwright/test';
import { _BasePage } from './_BasePage';

export class PlacesPage extends _BasePage {
  async goto() {
    await this.page.goto('https://paulgrandjeanphotography.com/places/', { waitUntil: 'domcontentloaded' });
  }

  async waitForLoaded() {
    await expect(this.page).toHaveURL(/\/places\/?$/, { timeout: 15000 });
  }

  async verifyNumOfPhotos(expectedCount: number) {
    await expect(this.page.locator('article img')).toHaveCount(expectedCount);
  }

  async verifyPhotosDisplayed(expectedCount: number) {
    const photos = this.page.locator('article img');
    for (let index = 0; index < expectedCount; index++) {
      await expect(photos.nth(index)).toBeVisible();
    }
  }
}
