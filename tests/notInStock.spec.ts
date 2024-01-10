import { test, expect } from '@playwright/test';
import { TestData } from './TestData';
import { Birds } from '../pageObjects/Birds/Birds';
import { HomePage } from '../pageObjects/HomePage/HomePage';
import { ShoppingCart } from '../pageObjects/ShoppingCart/ShoppingCart';
import { AddToCart } from '../pageObjects/AddToCart/AddToCart';
import { LoginPage } from '../pageObjects/LoginPage/LoginPage';
import { Checkout } from '../pageObjects/Checkout/Checkout';
import { Dogs } from '../pageObjects/Dogs/Dogs';

test('Not in stock', async ({ page }) => {

    const home = new HomePage(page);
    const dog = new Dogs(page);
    const addCart = new AddToCart(page);
    const cart = new ShoppingCart(page);
    const login = new LoginPage(page);
    const checkout = new Checkout(page);

    await home.goTo();
    await home.navigateToAnimalSideBar(TestData.dogsSrc);
    await dog.choseProductId(TestData.productIdDog);
    await addCart.addToCart();
    await cart.proceedToCheckout();
    await checkout.validCheckout(TestData.cardTy, TestData.cardNum, TestData.expiryD
        , TestData.firstN, TestData.lastN, TestData.ad1, TestData.ad2, TestData.city
        , TestData.state, TestData.zip, TestData.country);
    await checkout.continueCheckout();

    });