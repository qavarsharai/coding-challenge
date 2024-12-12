class CheckoutYourInformationPage{
    constructor(page) {
      this.page = page;
      this.firstName=this.page.locator("#first-name");
      this.lastName=this.page.locator("#last-name");
      this.zipCode=this.page.locator("#postal-code");
      this.continueButton=this.page.locator("#continue");
    
    }
  
    async fillUserInformation(firstname, lastname, zipcode) {
        await this.firstName.fill(firstname);
        await this.lastName.fill(lastname);
        await this.zipCode.fill(zipcode);

    }

    async clickOnContinueButton(){
        await this.continueButton.click();
      }

  }
  
  module.exports = CheckoutYourInformationPage;  