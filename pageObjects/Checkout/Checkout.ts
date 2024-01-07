import { expect, Page, } from "@playwright/test";
import { TestData } from "../../tests/TestData";
import { locators } from "./CheckoutLocators";

export class Checkout{
    static validCheckout(username: string, password: string) {
        throw new Error('Method not implemented.');
    }

    constructor(public page: Page) {
      this.page = page;
    }


  async validCheckout(cardType:string, cardNumber:string, expiryDate:string
    , firstName:string, lastName:string, adress1:string, adress2:string, city:string
    , state:string, zip:string, country:string){
    await this.page.locator(locators.cardType).fill(cardType);
    await this.page.locator(locators.cardNumber).fill(cardNumber);
    await this.page.locator(locators.expiryDate).fill(expiryDate);
    await this.page.locator(locators.firstName).fill(firstName);
    await this.page.locator(locators.lastName).fill(lastName);
    await this.page.locator(locators.adress1).fill(adress1);
    await this.page.locator(locators.adress2).fill(adress2);
    await this.page.locator(locators.city).fill(city);
    await this.page.locator(locators.state).fill(state);
    await this.page.locator(locators.zip).fill(zip);
    await this.page.locator(locators.country).fill(country);

    await this.page.locator(locators.continueButton).click();
    await this.page.waitForLoadState("networkidle");
  }
} 