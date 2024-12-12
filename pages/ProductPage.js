class ProductPage{
    constructor(page) {
      this.page = page;
      //this.addToCartButton = page.locator("//div[text()='Sauce Labs Backpack']/ancestor::div[@class='inventory_item']//button");
    }
  
    async addToCart(product) {
      const addToCartLocator="//div[text()='"+product +"']/ancestor::div[@class='inventory_item']//button";
      this.addToCartButton = this.page.locator(addToCartLocator);
      await this.addToCartButton.click();
    }

    async verifyRemoveButton(product){
      const removeButtonLocator="//div[text()='"+product +"']/ancestor::div[@class='inventory_item']//button";
      const textOfButton=await this.page.locator(removeButtonLocator).textContent();
      if(textOfButton.trim() !== "Remove")
      {throw new Error("Remove button is not present.") }
      console.log("Remove button is present.");

    }

  }
  
  module.exports = ProductPage;  