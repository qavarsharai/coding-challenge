class CheckoutCompletePage{
    constructor(page) {
      this.page = page;
      this.productName=this.page.locator("//div[@class='inventory_item_name']");
      this.productPrice=this.page.locator("//div[@class='inventory_item_price']");
      this.itemTotalLabel=this.page.locator("//div[@class='summary_subtotal_label']");
      this.shippingLabel=this.page.locator("//div[@data-test='shipping-info-label']");
      this.finishButton=this.page.locator("#finish");
    
    }
  
    async verifyProductDetails(productName, productPrice) {
        const textOfProductName=await this.productName.textContent();
        const textOfProductPrice=await this.productPrice.textContent();
        //const textOfItemTotalPrice=await this.itemTotalLabel.textContent();
        if(textOfProductName.trim() !== productName & textOfProductPrice.trim() !== productPrice 
        & this.shippingLabel.isVisible())
        {
            throw new Error("Product with right details are not displayed in Checkout Overview page. ") 
        }
        console.log("Product with right details is displayed in Checkout Overview page. ");

    }

    async clickOnFinishButton(){
        await this.finishButton.click();
      }

  }
  
  module.exports = CheckoutCompletePage;  