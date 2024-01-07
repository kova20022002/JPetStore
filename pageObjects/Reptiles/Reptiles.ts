import { expect, Page, } from "@playwright/test";
import { TestData } from "../../tests/TestData";
import { locators } from "./ReptilesLocators";

export class Reptiles{
    static choseProductId() {
        throw new Error('Method not implemented.');
    }
    constructor(public page: Page) {
        this.page = page;
      }
//chose product ID
    async choseProductId(productId:String){
        const IdList = await this.page.$$(locators.productId);
        for(const product of IdList){ 
            if(productId == await product.textContent()){
                await product.click();
                break;
            }
        }
}

}