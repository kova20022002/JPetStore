import { expect, Page, } from "@playwright/test";
import { TestData } from "../../tests/TestData";
import { locators } from "./HomePageLocators";

export class HomePage{
    static goTo() {
        throw new Error('Method not implemented.');
    }
    static navigateToSignIn() {
        throw new Error('Method not implemented.');
        }
    static navigateToAnimalImg() {
          throw new Error('Method not implemented.');
    }
    static navigateToAnimalSideBar() {
      throw new Error('Method not implemented.');
  }
  static search() {
    throw new Error('Method not implemented.');
}
    

    constructor(public page: Page) {
      this.page = page;
    }

//navigate to home page
  async goTo() {
    await this.page.goto(TestData.site);
    await this.page.waitForLoadState("domcontentloaded");
  }

//navigate to sign in 
  async navigateToSignIn() {
    await this.page.locator(locators.signinButton).click();
    await this.page.waitForLoadState("domcontentloaded");
  }

//navigate to animal with image
  async navigateToAnimalImg(alt:String) {
    const animal = await this.page.$$(locators.animalsImg);
   for(const prod of animal){
   if(alt == await prod.getAttribute('alt')){
    await prod.waitForElementState('visible');
    await prod.click({ timeout: 60000 });
    break;
}
}
    await this.page.waitForLoadState("domcontentloaded");
  }

//navigate to animal with sidebar
async navigateToAnimalSideBar(src:String) {
    const animal = await this.page.$$(locators.animalsSideMenu);
   for(const product of animal){
   if(src == await product.getAttribute('src')){
    await product.waitForElementState('visible');
    await product.click();
    break;
}
}
    await this.page.waitForLoadState("domcontentloaded");
  }

//navigate to animal with searchbox
  async search(searchAnimal:string){
    await this.page.locator(locators.searchBox).fill(searchAnimal);
    await this.page.locator(locators.searchButton).click();
    await this.page.waitForLoadState("networkidle");
  }

} 