@Regression
Feature: National Menu

    Background: National menu page
        Given I am on the "national menu" page

    Scenario: Verify availability message above menu
        Then the message "Availability may differ at different locations." is shown

    Scenario: Order pickup option on PDP takes user to PWO
        When I click on an item on the menu
        And  click on "Order Pickup" button
        Then I am navigated to "pickup PWO" page

    Scenario: Order delivery option on PDP takes user to delivery page
        When I click on an item on the menu
        And  click on "Order Delivery" button
        Then I am navigated to "delivery" page
        
    Scenario: Verify url of all menu items
        Then I assert href attribute for all items on menu page
            | item                                      |
            | chick-fil-a-chicken-biscuit               |
            | spicy-chicken-biscuit                     |
            | chick-n-minis                             |
            | egg-white-grill                           |
            | hash-brown-scramble-burrito               |
            | hash-brown-scramble-bowl                  |
            | bacon-egg-cheese-biscuit                  |
            | sausage-egg-cheese-biscuit                |
            | chicken-egg-cheese-biscuit                |
            | bacon-egg-cheese-muffin                   |
            | chicken-egg-cheese-muffin                 |
            | sausage-egg-cheese-muffin                 |
            | buttered-biscuit                          |
            | english-muffin                            |
            | hash-browns                               |
            | greek-yogurt-parfait                      |
            | fruit-cup                                 |
            | side-salad                                |
            | chick-fil-a-chicken-sandwich              |
            | chick-fil-a-deluxe-sandwich               |
            | spicy-chicken-sandwich                    |
            | spicy-deluxe-sandwich                     |
            | grilled-chicken-sandwich                  |
            | chick-fil-a-grilled-chicken-club-sandwich |
            | chick-fil-a-nuggets                       |
            | grilled-nuggets                           |
            | chick-n-strips                            |
            | chick-fil-a-cool-wrap                     |
            | cobb-salad                                |
            | spicy-southwest-salad                     |
            | market-salad                              |
            | chick-fil-a-waffle-potato-fries           |
            | mac-cheese                                |
            | chicken-noodle-soup                       |
            | kale-crunch-side                          |
            | waffle-potato-chips                       |
            | buddy-fruits-apple-sauce                  |
            | chocolate-fudge-brownie                   |
            # | peach-milkshake                          |
            | nuggets-kids-meal                         |
            | chicknstrips-kids-meal                    |
            | grilled-nuggets-kids-meal                 |
            | frosted-lemonade                          |
            # | frosted-coffee                            |
            # | chocolate-chunk-cookie-1                  |
            | cookies-cream-milkshake                   |
            | chocolate-milkshake                       |
            | strawberry-milkshake                      |
            | vanilla-milkshake                         |
            | icedream-cone                             |
            | icedream-cup                              |
            | freshly-brewed-iced-tea-sweetened         |
            | freshly-brewed-iced-tea-unsweetened       |
            | chick-fil-a-lemonade                      |
            | chick-fil-a-diet-lemonade                 |
            | sunjoy-w-12-sweet-tea-12-lemonade         |
            | sunjoy-w-12-sweet-tea-12-diet-lemonade    |
            | sunjoy-w-12-unsweet-tea-12-lemonade       |
            | sunjoy-w-12-unsweet-tea-12-diet-lemonade  |
            | iced-coffee                               |
            | coca-cola                                 |
            | dr-pepper                                 |
            | dasani-bottled-water                      |
            | honest-kids-apple-juice                   |
            | simply-orange                             |
            | 1-chocolate-milk                          |
            | 1-white-milk                              |
            # | coffee                                   |
            | gallon-beverages                          |
            | 5-lb-bag-of-ice                           |
            | barbecue-sauce                            |
            | chick-fil-a-sauce                         |
            # | garden-herb-ranch-sauce-1                |
            | honey-mustard-sauce                       |
            | honey-roasted-bbq-sauce                   |
            | polynesian-sauce                          |
            | sweet-and-spicy-sriracha-sauce            |
            | zesty-buffalo-sauce                       |
            | avocado-lime-ranch-dressing               |
            | creamy-salsa-dressing                     |
            | fat-free-honey-mustard-dressing           |
            | garden-herb-ranch-dressing-1              |
            | light-balsamic-vinaigrette-dressing       |
            | light-italian-dressing                    |
            | zesty-apple-cider-vinaigrette-dressing    |

    Scenario: Order delivery option takes user to delivery page
        And  click on order now button under an item
        When I select "order delivery" for type of order
        Then I am navigated to "delivery" page

    Scenario: Order pickup option takes user to order pickup PWO
        And  click on order now button under an item
        When I select "order pickup" for type of order
        Then I am navigated to "pickup PWO" page

    Scenario: Clicking on sub sections of Menu shows corresponding items
        And click on sub sections of National Menu and check for an item on UI

            | section   | item                              |
            | breakfast | Spicy Chicken Biscuit             |
            | entrees   | Spicy Chicken Sandwich            |
            | salads    | Cobb Salad                        |
            | sides     | Fruit Cup                         |
            | kidsmeals | 5 Ct Nuggets Kid's Meal           |
            | treats    | Frosted Lemonade                  |
            | beverages | Freshly-Brewed Iced Tea Sweetened |
            | sauces    | Barbeque Sauce                    |

