import { expect, Page } from '@playwright/test';

export class _BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyHeader() {
    await expect(this.page.locator('article').getByRole('heading', { level: 1 })).toBeVisible();
  }
}
