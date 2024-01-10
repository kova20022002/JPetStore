import { expect, Page, } from "@playwright/test";
import { TestData } from "../../tests/TestData";
import { locators3 } from "./Checkoutlocators";


export class Checkout{


  
    static validCheckout(username: string, password: string) {
        throw new Error('Method not implemented.');
    }

    constructor(public page: Page) {
      this.page = page;
    }

    async continueCheckout() {

      await this.page.locator(locators3.cont).click();
/*
      const IdList = await this.page.$$(locators3.continueButton);
        for(const product of IdList){ 
            if(locators3.continuButtonText == await product.textContent()){
                await product.click();
                break;
            }
        }
        await this.page.waitForLoadState("domcontentloaded");*/
    } 
    



  async validCheckout(cardType:string, cardNumber:string, expiryDate:string
    , firstName:string, lastName:string, adress1:string, adress2:string, city:string
    , state:string, zip:string, country:string){
    
//card type
      const IdList = await this.page.$$(locators3.cardType);

      for (const product of IdList) {
         const productName = await product.getAttribute('name');

         if (locators3.cardTypnName === productName) {
           await product.click();
           await product.selectOption("Visa");
           break;
          }
       }
//card number
       for (const product of IdList) {
        const productName = await product.getAttribute('name');

        if (locators3.cardNumberName === productName) {
          await product.click();
          await product.fill("999 9999 9999 9999");
          break;
         }
      }
   
  //expiry date
  for (const product of IdList) {
    const productName = await product.getAttribute('name');

    if (locators3.expiryDateName === productName) {
      await product.click();
      await product.fill("12/03");
      break;
     }
  }

  //first name
  for (const product of IdList) {
    const productName = await product.getAttribute('name');

    if (locators3.firstNameName === productName) {
      await product.click();
      await product.fill("Emir");
      break;
     }
  }

  //last name
  for (const product of IdList) {
    const productName = await product.getAttribute('name');

    if (locators3.lastNameName === productName) {
      await product.click();
      await product.fill("Kovac");
      break;
     }
  }

  //adress1
  for (const product of IdList) {
    const productName = await product.getAttribute('name');

    if (locators3.adress1Name === productName) {
      await product.click();
      await product.fill("Tome Mendesa");
      break;
     }
  }

  //adress2
  for (const product of IdList) {
    const productName = await product.getAttribute('name');

    if (locators3.adress2Name === productName) {
      await product.click();
      await product.fill("Titova");
      break;
     }
  }


  //city
  for (const product of IdList) {
    const productName = await product.getAttribute('name');

    if (locators3.cityName === productName) {
      await product.click();
      await product.fill("Sarajevo");
      break;
     }
  }

  //state
  for (const product of IdList) {
    const productName = await product.getAttribute('name');

    if (locators3.stateName === productName) {
      await product.click();
      await product.fill("BiH");
      break;
     }
  }

  //zip
  for (const product of IdList) {
    const productName = await product.getAttribute('name');

    if (locators3.zipName === productName) {
      await product.click();
      await product.fill("71320");
      break;
     }
  }

  //country
  for (const product of IdList) {
    const productName = await product.getAttribute('name');

    if (locators3.countryName === productName) {
      await product.click();
      await product.fill("USA");
      break;
     }
  }
  
    }
} 