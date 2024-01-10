import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage/LoginPage';
import { TestData } from './TestData';
import { HomePage } from '../pageObjects/HomePage/HomePage';
import { locators } from '../pageObjects/LoginPage/LoginPageLocators';
import { locators2 } from '../pageObjects/HomePage/HomePageLocators';


test('Login test', async ({ page }) => {

const login = new LoginPage(page);
const home = new HomePage(page);

await home.goTo();
await expect(page.locator(locators2.signinButton)).toBeVisible();
await home.navigateToSignIn();
await expect(page.locator(locators.loginButton)).toBeVisible();
await login.validLogin(TestData.username, TestData.password);
});

/*
 test('test', async ({ page }) => {
  await page.goto('https://petstore.octoperf.com/actions/Catalog.action');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('2002');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('Emir123');
  await page.getByRole('button', { name: 'Login' }).click();
})

*/