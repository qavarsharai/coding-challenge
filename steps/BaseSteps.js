const { setDefaultTimeout,Given, When, Then, Before, After } = require('@cucumber/cucumber');
const BasePage = require('../pages/BasePage');
const LoginPage = require('../pages/LoginPage');
const ProductPage = require('../pages/ProductPage');
const config = require('../utils/config');
const YourCartPage = require('../pages/YourCartPage');
const CheckoutYourInformationPage = require('../pages/CheckoutYourInformationPage');
const CheckoutOverviewPage = require('../pages/CheckoutOverviewPage');


setDefaultTimeout(10000);

Before(async function () {
  console.log("Initilizing the browser");
  this.basePage = new BasePage();
  await this.basePage.startBrowser();
  this.page = this.basePage.page;
  this.loginPage = new LoginPage(this.basePage.page);
  this.productPage = new ProductPage(this.basePage.page); 
  this.yourCartPage = new YourCartPage(this.basePage.page);
  this.checkoutYourInformaitonPage = new CheckoutYourInformationPage(this.basePage.page);
  this.checkoutOverviewPage = new CheckoutOverviewPage(this.basePage.page);
});

After(async function () {
  console.log("Closing the browser");

  await this.basePage.closeBrowser(); 
});

Given('User launches the Saucedemo portal and logs in successfully', async function () {
  console.log("User launches the Saucedemo portal and logs in successfully");
  await this.page.goto(config.applicationURL); 
  await this.loginPage.login(config.credentials.username, config.credentials.password); 
});


Then('user should see page title as {string}', async function(expectedTitle)  {
  console.log("user should see page title");
  await this.basePage.verifyTitle(expectedTitle);
});


Then('user validates success message is displayed', async function()  {
  console.log("user validates success message is displayed");
  await this.basePage.verifySuccessMessage();
});
