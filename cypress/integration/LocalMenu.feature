@Regression
Feature: Local Menu

    Background: Location specfic menu page
        Given   I am on the "location menu" page

    Scenario: selecting orderpickup on Locations Item details page navigates to PWO
        When I click on an item on the local menu
        And  click on Order Pickup button on the local menu
        Then I am navigated to "pickup PWO" page

    Scenario: selecting Delivery on Locations Item details page navigates to PWO
        When I click on an item on the local menu
        And  click on Order Delivery button on the local menu
        Then I am navigated to "delivery" page
    
    Scenario: selecting orderpickup navigates to PWO
        When I click on order now button under an item
        And  I click on Order Pickup button on the Pop up
        Then I am navigated to "pickup PWO" page

    Scenario: selecting order Delivery navigates to Delivery
        When I click on order now button under an item
        And I click on Order Delivery button on the Pop up
        Then I am navigated to "delivery" page

    Scenario: Clicking on sub sections of Local Menu shows corresponding items
        And click on sub sections of Local Menu and check for an item on UI

            | section               | item                                      |
            | breakfast             | Chick-fil-A® Chicken Biscuit              |
            | entrees               | Spicy Chicken Sandwich                    |
            | salads                | Cobb Salad                                |
            | sides                 | Fruit Cup                                 |
            | kidsmeals             | 5 Ct Nuggets Kid's Meal                   |
            | treats                | Frosted Lemonade                          |
            | beverages             | Freshly-Brewed Iced Tea Sweetened         |
            | sauces                | Barbeque Sauce                            |
