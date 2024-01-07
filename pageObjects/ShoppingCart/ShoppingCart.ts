import { expect, Page, } from "@playwright/test";
import { TestData } from "../../tests/TestData";
import { locators } from "./ShoppingCartLocators";

export class ShoppingCart{
    static proceedToCheckout() {
        throw new Error('Method not implemented.');
    }
    static changeQuantity() {
        throw new Error('Method not implemented.');
    }
    static removeProduct() {
        throw new Error('Method not implemented.');
    }

    constructor(public page: Page) {
      this.page = page;
    }


    async proceedToCheckout(){
        await this.page.locator(locators.proceedToCheckoutButton).click();
        await this.page.waitForLoadState("domcontentloaded");
    }

    async changeQuantity(quantity:string){
        await this.page.locator(locators.quantityBox).fill(quantity);
        await this.page.locator(locators.update).click();
        await this.page.waitForLoadState("networkidle");
    }
    
    async removeProduct(){
        await this.page.locator(locators.remove).click();
        await this.page.waitForLoadState("networkidle");
    }

}