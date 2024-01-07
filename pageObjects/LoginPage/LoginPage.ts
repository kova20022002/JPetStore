import { expect, Page, } from "@playwright/test";
import { TestData } from "../../tests/TestData";
import { locators } from "./LoginPageLocators";

export class LoginPage{
    static validLogin(username: string, password: string) {
        throw new Error('Method not implemented.');
    }

    constructor(public page: Page) {
      this.page = page;
    }


  async validLogin(username:string, password:string){
    await this.page.locator(locators.userName).fill(username);
    await this.page.locator(locators.password).fill(password);
    await this.page.locator(locators.loginButton).click();
    await this.page.waitForLoadState("networkidle");
  }
} 