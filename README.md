The following tests were done in Opera Web Browser, other browser may indicate different results (ex. Left Side Menu may appear as a string instead of an image*).
To run the test cases, the following page objects with methods are needed: 
1.	Home page with the methods: goTo(), navigateToSignIn(), navigateToAnimalImg(), navigateToAnimalSideBar(), search() and goToCart() 
2.	Shopping Cart with the methods:   proceedToCheckout(), changeQuantity() and  removeProduct() 
3.	Login Page with the method: validLogin()
4.	Birds, Cats, Dogs, Fish and Reptiles all with the method: choseProductId()
5.	Checkout with the method: validCheckOut()
Each object contains locators*, indicating the exact data type written in json/html on the website.
Every test case imports an object and the needed data specified to each task from ‘TestData.ts’ such as productId: 'AV-CB-01', productIdDog: 'K9-BD-01', alt: 'Birds' etc.
To modify the test.ts, make sure to modify the TestData with the new values.

Sample Usage: TC1 - Register and buy

Open: login.spec.ts
To run the test: open Terminal, type: ***
