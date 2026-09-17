import { expect } from '@playwright/test';
import { _BasePage } from './_BasePage';

export class AboutPage extends _BasePage {
  async goto() {
    await this.page.goto('https://paulgrandjeanphotography.com/about-2/', { waitUntil: 'domcontentloaded' });
  }

  async waitForLoaded() {
    await expect(this.page).toHaveURL(/\/about-2\/?$/, { timeout: 15000 });
  }

  async verifyText() {
    await expect(this.page.getByText('Through my travels', { exact: false })).toBeVisible();
    await expect(this.page.getByText('Thank-you for viewing my images', { exact: false })).toBeVisible();
  }
}
