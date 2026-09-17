import { test } from '@playwright/test';
import { AboutPage } from '../page-objects/AboutPage';
import { MainPage } from '../page-objects/MainPage';
import { NaturePage } from '../page-objects/NaturePage';
import { PeoplePage } from '../page-objects/PeoplePage';
import { PlacesPage } from '../page-objects/PlacesPage';
import { SubscribePage } from '../page-objects/SubscribePage';
import { ThingsPage } from '../page-objects/ThingsPage';

test('clicks the Places nav item and opens the Places page', async ({ page }) => {
  const homePage = new MainPage(page);
  const placesPage = new PlacesPage(page);

  await homePage.goto();
  await homePage.clickPlaces();
  await placesPage.waitForLoaded();
  await placesPage.verifyHeader();
});

test('clicks the People nav item and opens the People page', async ({ page }) => {
  const homePage = new MainPage(page);
  const peoplePage = new PeoplePage(page);

  await homePage.goto();
  await homePage.clickPeople();
  await peoplePage.waitForLoaded();
  await peoplePage.verifyHeader();
});

test('clicks the Nature nav item and opens the Nature page', async ({ page }) => {
  const homePage = new MainPage(page);
  const naturePage = new NaturePage(page);

  await homePage.goto();
  await homePage.clickNature();
  await naturePage.waitForLoaded();
  await naturePage.verifyHeader();
});

test('clicks the Things nav item and opens the Things page', async ({ page }) => {
  const homePage = new MainPage(page);
  const thingsPage = new ThingsPage(page);

  await homePage.goto();
  await homePage.clickThings();
  await thingsPage.waitForLoaded();
  await thingsPage.verifyHeader();
});

test('clicks the Subscribe nav item and opens the Subscribe page', async ({ page }) => {
  const homePage = new MainPage(page);
  const subscribePage = new SubscribePage(page);

  await homePage.goto();
  await homePage.clickSubscribe();
  await subscribePage.waitForLoaded();
  await subscribePage.verifyHeader();
});

test('clicks the About Me nav item and opens the About Me page', async ({ page }) => {
  const homePage = new MainPage(page);
  const aboutPage = new AboutPage(page);

  await homePage.goto();
  await homePage.clickAboutMe();
  await aboutPage.waitForLoaded();
  await aboutPage.verifyHeader();
  await aboutPage.verifyText();
});