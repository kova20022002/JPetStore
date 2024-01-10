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
        const IdList = await this.page.$$(locators.button);
        for(const product of IdList){ 
            if(locators.name == await product.textContent()){
                await product.click();
                break;
            }
        }
        await this.page.waitForLoadState("domcontentloaded");
    }
}