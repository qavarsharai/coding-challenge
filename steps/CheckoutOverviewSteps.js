const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const BasePage = require('../pages/BasePage');
const LoginPage = require('../pages/LoginPage');
const ProductPage = require('../pages/ProductPage');
const YourCartPage = require('../pages/YourCartPage');
const config = require('../utils/config');
const expect = require('expect');


When('user validates {string} {string}', async function(product, price) {
  await this.checkoutOverviewPage.verifyProductDetails(product, price);
});

When('user clicks on Finish button',async function(){
    await this.checkoutOverviewPage.clickOnFinishButton();
})


