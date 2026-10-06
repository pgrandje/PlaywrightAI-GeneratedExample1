import { test as base } from '@playwright/test';
import { AboutPage } from '../page-objects/AboutPage';
import { MainPage } from '../page-objects/MainPage';
import { NaturePage } from '../page-objects/NaturePage';
import { PeoplePage } from '../page-objects/PeoplePage';
import { PlacesPage } from '../page-objects/PlacesPage';
import { SubscribePage } from '../page-objects/SubscribePage';
import { ThingsPage } from '../page-objects/ThingsPage';

type PageObjectFixtures = {
  aboutPage: AboutPage;
  mainPage: MainPage;
  naturePage: NaturePage;
  peoplePage: PeoplePage;
  placesPage: PlacesPage;
  subscribePage: SubscribePage;
  thingsPage: ThingsPage;
};

export const test = base.extend<PageObjectFixtures>({
  aboutPage: async ({ page }, use) => {
    await use(new AboutPage(page));
  },
  mainPage: async ({ page }, use) => {
    await use(new MainPage(page));
  },
  naturePage: async ({ page }, use) => {
    await use(new NaturePage(page));
  },
  peoplePage: async ({ page }, use) => {
    await use(new PeoplePage(page));
  },
  placesPage: async ({ page }, use) => {
    await use(new PlacesPage(page));
  },
  subscribePage: async ({ page }, use) => {
    await use(new SubscribePage(page));
  },
  thingsPage: async ({ page }, use) => {
    await use(new ThingsPage(page));
  },
});
