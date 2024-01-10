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
        const IdList = await this.page.$$(locators.button);
        for(const product of IdList){ 
            if(locators.name == await product.textContent()){
                await product.click();
                break;
            }
        }
        await this.page.waitForLoadState("domcontentloaded");
    }

    async changeQuantity(quantity:string){
        const IdList = await this.page.$$(locators.quantityBox);
        for(const product of IdList){ 
            if(quantity == await product.getAttribute('name')){
                await product.click();
                await product.fill(quantity);
                break;
            }
        }
        await this.page.waitForLoadState("domcontentloaded");
    }
    
    async removeProduct(){
        const IdList = await this.page.$$(locators.remove);
        for(const product of IdList){ 
            if("Button" == await product.getAttribute('class')){
                await product.click();
                break;
            }
        }
        await this.page.waitForLoadState("domcontentloaded");
    }

    async updateCard(){
        const IdList = await this.page.$$(locators.update);
        for(const product of IdList){ 
            if("updateCartQuantities" == await product.getAttribute('name')){
                await product.click();
                break;
            }
        }
        await this.page.waitForLoadState("domcontentloaded");
    }

}