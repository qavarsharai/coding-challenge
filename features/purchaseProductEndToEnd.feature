Feature: Validate the end to end execution of a Product Purchase in the Saucedemo portal

Background: 
    Given User launches the Saucedemo portal and logs in successfully
    Then user should see page title as "Products"

Scenario Outline: Verify the user is able to successfully purchase an item in the portal
    When user adds "<Product>" to cart
    Then user should see page title as "Your Cart"
    And validate product "<Product>" and price "<Price>" is listed in Your Cart page
    When user clicks on Checkout button
    Then user should see page title as "Checkout: Your Information"
    When user enters information "<First Name>" "<Last Name>" "<Zip Code>"
    When user clicks on Continue button
    Then user should see page title as "Checkout: Overview"
    And user validates "<Product>" "<Price>"
    When user clicks on Finish button
    Then user should see page title as "Checkout: Complete!"
    And user validates success message is displayed

Examples:
    | Product | Price | First Name | Last Name | Zip Code |
    | Sauce Labs Fleece Jacket  | 49.99 | Varsha     | Rai       | 2000     |
    | Sauce Labs Bike Light  | 9.99 | Jane     | Doe       | 2000     |


   