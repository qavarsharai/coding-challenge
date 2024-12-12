const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const BasePage = require('../pages/BasePage');
const LoginPage = require('../pages/LoginPage');
const ProductPage = require('../pages/ProductPage');
const YourCartPage = require('../pages/YourCartPage');
const config = require('../utils/config');
const expect = require('expect');


When('user enters information {string} {string} {string}', async function(firstName, lastName, zipCode)  {
  await this.checkoutYourInformaitonPage.fillUserInformation(firstName, lastName, zipCode);
});

When('user clicks on Continue button', async function()  {
    await this.checkoutYourInformaitonPage.clickOnContinueButton();
  });
