import { expect } from '@playwright/test';
import { _BasePage } from './_BasePage';

export class MainPage extends _BasePage {
  async goto() {
    await this.page.goto('https://paulgrandjeanphotography.com', { waitUntil: 'domcontentloaded' });
  }

  async waitForLoaded() {
    await expect(this.page).toHaveURL(/^https:\/\/paulgrandjeanphotography\.com\/?$/, { timeout: 15000 });
  }

  async clickHome() {
    const homeLink = this.page.locator('header [role="navigation"] a[href$="paulgrandjeanphotography.com/"]');
    await expect(homeLink, 'Home menu item not found').toBeVisible();
    await homeLink.click();
  }

  async clickPlaces() {
    const placesLink = this.page.locator('header [role="navigation"] a[href*="/places/"]');
    await expect(placesLink, 'Places menu item not found').toBeVisible();
    await placesLink.click();
  }

  async clickPeople() {
    const peopleLink = this.page.locator('header [role="navigation"] a[href*="/people/"]');
    await expect(peopleLink, 'People menu item not found').toBeVisible();
    await peopleLink.click();
  }

  async clickNature() {
    const natureLink = this.page.locator('header [role="navigation"] a[href*="/nature/"]');
    await expect(natureLink, 'Nature menu item not found').toBeVisible();
    await natureLink.click();
  }

  async clickThings() {
    const thingsLink = this.page.locator('header [role="navigation"] a[href*="/things/"]');
    await expect(thingsLink, 'Things menu item not found').toBeVisible();
    await thingsLink.click();
  }

  async clickSubscribe() {
    const subscribeLink = this.page.locator('header [role="navigation"] a[href*="/contact-me/"]');
    await expect(subscribeLink, 'Subscribe menu item not found').toBeVisible();
    await subscribeLink.click();
  }

  async clickAboutMe() {
    const aboutMeLink = this.page.locator('header [role="navigation"] a[href*="/about-2/"]');
    await expect(aboutMeLink, 'About Me menu item not found').toBeVisible();
    await aboutMeLink.click();
  }
}