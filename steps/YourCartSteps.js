const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const BasePage = require('../pages/BasePage');
const LoginPage = require('../pages/LoginPage');
const ProductPage = require('../pages/ProductPage');
const YourCartPage = require('../pages/YourCartPage');
const config = require('../utils/config');
const expect = require('expect');


When('validate product {string} and price {string} is listed in Your Cart page', async function(product, price) {
  console.log("validate product and price information");
  await this.yourCartPage.verifyProductName(product, price);
});

When('user clicks on Checkout button',async function(){
  console.log("user clicks on Checkout button");
  await this.yourCartPage.clickOnCheckoutButton();
});
