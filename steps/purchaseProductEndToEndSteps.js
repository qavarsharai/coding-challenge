const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const BasePage = require('../pages/BasePage');
const LoginPage = require('../pages/LoginPage');
const ProductPage = require('../pages/ProductPage');
const YourCartPage = require('../pages/YourCartPage');
const config = require('../utils/config');
const expect = require('expect');


When('user adds {string} to cart', async function (product) {
  console.log("user adds products to cart");
  await this.productPage.addToCart(product);
  await this.productPage.verifyRemoveButton(product);
  await this.basePage.clickOnCartIconButton();
});