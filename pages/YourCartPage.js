class YourCartPage{
    constructor(page) {
      this.page = page;
      this.productName=this.page.locator("//div[@class='inventory_item_name']");
      this.productPrice=this.page.locator("//div[@class='inventory_item_price']");
      this.checkoutButton=this.page.locator("#checkout");
    
    }
  
    async verifyProductName(productName, productPrice) {
        const textOfProductName=await this.productName.textContent();
        const textOfProductPrice=await this.productPrice.textContent();
        if(textOfProductName.trim() !== productName & textOfProductPrice.trim() !== productPrice)
        {throw new Error("Product with right details are not displayed in YourCart page. ") }
        console.log("Product with right details is displayed in YourCart page. ");
    }

    async clickOnCheckoutButton(){
        await this.checkoutButton.click();
      }

  }
  
  module.exports = YourCartPage;  