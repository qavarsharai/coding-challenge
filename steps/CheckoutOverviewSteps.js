const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const BasePage = require('../pages/BasePage');
const LoginPage = require('../pages/LoginPage');
const ProductPage = require('../pages/ProductPage');
const YourCartPage = require('../pages/YourCartPage');
const config = require('../utils/config');
const expect = require('expect');


When('user validates {string} {string}', async function(product, price) {
  console.log("user validates product information")
  await this.checkoutOverviewPage.verifyProductDetails(product, price);
});

When('user clicks on Finish button',async function(){
  console.log("user clicks on Finish button")
  await this.checkoutOverviewPage.clickOnFinishButton();
})


