const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const BasePage = require('../pages/BasePage');
const LoginPage = require('../pages/LoginPage');
const ProductPage = require('../pages/ProductPage');
const YourCartPage = require('../pages/YourCartPage');
const config = require('../utils/config');
const expect = require('expect');


When('user adds {string} to cart', async function (product) {
  console.log(`Adding product to cart: ${product}`);
  await this.productPage.addToCart(product);
  await this.productPage.verifyRemoveButton(product);
  await this.basePage.clickOnCartIconButton();
});

// When('user navigates to {string} page', async (pageName) => {
//   await productPage.navigateToPage(pageName);
// });


// Then('user clicks on {string} button', async (buttonName) => {
//   await productPage.clickButton(buttonName);
// });

// Then('user navigates to {string} page', async (pageName) => {
//   await productPage.validateNavigation(pageName);
// });

// Then('user enters information {string} {string} {string}', async (firstName, lastName, zipCode) => {
//   await productPage.enterUserInfo(firstName, lastName, zipCode);
// });

// Then('user validates {string} {string} {string} {string}', async (product, value, itemTotal, shippingInfo) => {
//   const validationResult = await productPage.validateOverview(product, value, itemTotal, shippingInfo);
//   expect(validationResult).toBe(true);
// });

// Then('user validates {string} message is displayed', async (successMessage) => {
//   const messageDisplayed = await productPage.validateSuccessMessage(successMessage);
//   expect(messageDisplayed).toBe(true);
// });
