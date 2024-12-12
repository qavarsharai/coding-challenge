const { setDefaultTimeout,Given, When, Then, Before, After } = require('@cucumber/cucumber');
const BasePage = require('../pages/BasePage');
const LoginPage = require('../pages/LoginPage');
const ProductPage = require('../pages/ProductPage');
const config = require('../utils/config');
const expect = require('expect');
const YourCartPage = require('../pages/YourCartPage');
const CheckoutYourInformationPage = require('../pages/CheckoutYourInformationPage');
const CheckoutOverviewPage = require('../pages/CheckoutOverviewPage');


setDefaultTimeout(10000);

Before(async function () {
  console.log("=================Inside Before Hook==================");
  this.basePage = new BasePage(); // Initialize the BasePage
  await this.basePage.startBrowser(); // Start the browser
  this.page = this.basePage.page; // Assign the page from BasePage
  this.loginPage = new LoginPage(this.basePage.page); // Pass the page object to LoginPage
  this.productPage = new ProductPage(this.basePage.page); 
  this.yourCartPage = new YourCartPage(this.basePage.page);
  this.checkoutYourInformaitonPage = new CheckoutYourInformationPage(this.basePage.page);
  this.checkoutOverviewPage = new CheckoutOverviewPage(this.basePage.page);

  console.log("=================Browser Initialized==================");
});

After(async function () {
  console.log('=================Inside After Hook==================');
  await this.basePage.closeBrowser(); // Use `this.basePage` to close the browser
  console.log('=================After Closing Browser==================');
});

Given('User launches the Saucedemo portal and logs in successfully', async function () {
  console.log('=================Inside Given Step==================');
  await this.page.goto(config.applicationURL); // Use the URL from config
  await this.loginPage.login(config.credentials.username, config.credentials.password); // Use credentials from config
  console.log('=================After Login==================');
});


Then('user should see page title as {string}', async function(expectedTitle)  {
  await this.basePage.verifyTitle(expectedTitle);
});


Then('user validates success message is displayed', async function()  {
  await this.basePage.verifySuccessMessage();
});
