import { test } from '../fixtures/baseTest';

test('clicks the Places nav item and opens the Places page', async ({ mainPage, placesPage }) => {
  await mainPage.goto();
  await mainPage.clickPlaces();
  await placesPage.waitForLoaded();
  await placesPage.verifyHeader();
});

test('clicks the People nav item and opens the People page', async ({ mainPage, peoplePage }) => {
  await mainPage.goto();
  await mainPage.clickPeople();
  await peoplePage.waitForLoaded();
  await peoplePage.verifyHeader();
});

test('clicks the Nature nav item and opens the Nature page', async ({ mainPage, naturePage }) => {
  await mainPage.goto();
  await mainPage.clickNature();
  await naturePage.waitForLoaded();
  await naturePage.verifyHeader();
});

test('clicks the Things nav item and opens the Things page', async ({ mainPage, thingsPage }) => {
  await mainPage.goto();
  await mainPage.clickThings();
  await thingsPage.waitForLoaded();
  await thingsPage.verifyHeader();
});

test('clicks the Subscribe nav item and opens the Subscribe page', async ({ mainPage, subscribePage }) => {
  await mainPage.goto();
  await mainPage.clickSubscribe();
  await subscribePage.waitForLoaded();
  await subscribePage.verifyHeader();
});

test('clicks the About Me nav item and opens the About Me page', async ({ mainPage, aboutPage }) => {
  await mainPage.goto();
  await mainPage.clickAboutMe();
  await aboutPage.waitForLoaded();
  await aboutPage.verifyHeader();
  await aboutPage.verifyText();
});