import { expect, Page, } from "@playwright/test";
import { TestData } from "../../tests/TestData";
import { locators } from "./AddToCartLocators";

export class AddToCart{
    static addToCart() {
        throw new Error('Method not implemented.');
    }

    constructor(public page: Page) {
        this.page = page;
      }
//add to cart
    async addToCart(){
        await this.page.locator(locators.addButton).click();
        await this.page.waitForLoadState("domcontentloaded");

    }
}