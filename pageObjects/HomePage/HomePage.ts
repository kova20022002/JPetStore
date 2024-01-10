import { expect, Page, } from "@playwright/test";
import { TestData } from "../../tests/TestData";
import { locators2 } from "./HomePageLocators";

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
async navigateToSignIn(){
  const IdList = await this.page.$$(locators2.signinButton);
  for(const product of IdList){ 
      if("Sign In" == await product.textContent()){
          await product.click();
          break;
      }
  }
  await this.page.waitForLoadState("domcontentloaded");
}

//navigate to animal with image
  async navigateToAnimalImg(alt:String) {
    const animal = await this.page.$$(locators2.animalsImg);
   for(const prod of animal){
    const productName = await prod.getAttribute('alt');
    if (alt === productName) {
      await prod.click();
      break;
     }
}
    await this.page.waitForLoadState("domcontentloaded");
  }

//navigate to animal with sidebar
async navigateToAnimalSideBar(src:String) {
    const animal = await this.page.$$(locators2.animalsSideMenu);
   for(const prod of animal){
    const productName = await prod.getAttribute('src');
    if (src === productName) {
      await prod.click();
      break;
     }
}
    await this.page.waitForLoadState("domcontentloaded");
  }

//navigate to animal with searchbox
  async search(searchAnimal:string){
    await this.page.locator(locators2.searchBox).click();
    await this.page.locator(locators2.searchBox).fill(searchAnimal);
    await this.page.locator(locators2.searchButton).click();
    await this.page.waitForLoadState("networkidle");
  }

  async goToCart(){
    const IdList = await this.page.$$(locators2.cart);
    for(const product of IdList){ 
        if("img_cart" == await product.getAttribute('name')){
            await product.click();
            break;
        }
    }
    await this.page.waitForLoadState("domcontentloaded");
  }
} 