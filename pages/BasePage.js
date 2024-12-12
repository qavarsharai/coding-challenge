const { chromium } = require('playwright');

class BasePage {
  constructor() {
    this.browser = null;
    this.page = null;
    this.locators = {
      pageTitle: "//span[@class='title']",
      cartIcon: "//a[@class='shopping_cart_link']",
      successMessage:"//h2[text()='Thank you for your order!']" 
    };
  }

  async startBrowser() {
    this.browser = await chromium.launch({ headless: false,slowMo: 500 });
    this.page = await this.browser.newPage();
  }

  async closeBrowser() {
    if (this.browser) {
      await this.browser.close();
    }
  }

  async verifyTitle(expectedTitle) {
    const actualTitle = await this.page.locator(this.locators.pageTitle).textContent(); // Fetch the text content of the title
    console.log(`Verifying page title. Expected: "${expectedTitle}", Actual: "${actualTitle.trim()}"`);
    if (actualTitle.trim() !== expectedTitle) {
      throw new Error(`Page title does not match! Expected: "${expectedTitle}", Actual: "${actualTitle.trim()}"`);
    }
    console.log("Page title verified successfully.");
  }

  async clickOnCartIconButton(){
    await this.page.locator(this.locators.cartIcon).click();
  }

  async verifySuccessMessage(){
    if (!this.page.locator(this.locators.successMessage).isVisible()) {
      throw new Error("Error - Success message is Not displayed!");
    }
    console.log("Success message is displayed!")
    await this.page.waitForTimeout(2000);

  }

  
}

module.exports = BasePage;
