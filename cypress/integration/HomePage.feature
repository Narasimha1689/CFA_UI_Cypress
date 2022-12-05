@Regression
Feature: Chick-fil-A One Home Page Validations
    
    Scenario: Verify Home Page and Check User Navigation after clicking on Sign Up
        Given I am on the ".Com homepage" page
        And Mousehover on the Chick-fil-A One Icon logo and and click it
        Then Verify Promo banner section Image
            | ImageLink |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Evergreen%202021/SEGGold%20LG3.png?h=61&w=112&la=en |
        # And Verify Promo banner section Paragraphs
        #     | ParagraphText          |
        #     | Make every order count |
        #     | Join Chick-fil-A One   |
        And Click on the Sign Up button
        Then Verify the URL Navigations
            | URLNavigation |
            # | https://www.chick-fil-a.com/one |
            | https://www.evergreenhills.com/en?utm_campaign=GM_NAT_evergreen_holiday_nov_22&utm_source=banner&utm_medium=web&utm_content=homepage_banner |
    
    # Scenario: Verify Give an eGift Card button with Continue Functional Test Flow
    #     Given I am on the ".Com homepage" page
    #     And Mousehover on the Chick-fil-A One Icon logo and and click it
    #     # And Verify Promo banner section Paragraphs
    #     #     | ParagraphText          |
    #     #     | Make every order count |
    #     #     | Join Chick-fil-A One   |
    #     And Click on Give an eGift Card button
    #     And Verify Chick-fil-A pop up and click on Continue button
    #     Then Verify the URL displayed
    #         | URLNavigation     |
    #         | cfa.wgiftcard.com |
    
    Scenario: Verify shop eGift Card button
        Given I am on the ".Com homepage" page
        And Mousehover on the Chick-fil-A One Icon logo and and click it
        # And Verify Promo banner section Paragraphs
        #     | ParagraphText          |
        #     | Make every order count |
        #     | Join Chick-fil-A One   |
        And Click on shop eGift Card button
        Then Verify the shop ecard url displayed
            | URLNavigation     |
            | https://www.chick-fil-a.com/gift-cards/egift-cards |
    
    Scenario: Verify Learn about Gift Card button
        Given I am on the ".Com homepage" page
        And Mousehover on the Chick-fil-A One Icon logo and and click it
        # And Verify Promo banner section Paragraphs
        #     | ParagraphText          |
        #     | Make every order count |
        #     | Join Chick-fil-A One   |
        And Click on Learn about gift Card button
        Then Verify the Learn about gift Card url displayed
            | URLNavigation     |
            | https://www.chick-fil-a.com/gift-cards |
    
    # Scenario: Verify Give an eGift Card button with Go Back Functional Test Flow
    #     Given I am on the ".Com homepage" page
    #     And Mousehover on the Chick-fil-A One Icon logo and and click it
    #     And Verify Promo banner section Paragraphs
    #         | ParagraphText          |
    #         | Make every order count |
    #         | Join Chick-fil-A One   |
    #     And Click on Give an eGift Card button
    #     And Verify Chick-fil-A pop up section
    #     And Click on Go Back button
    #     And User should return back to the Home page
    #         | URLNavigation                |
    #         | https://www.chick-fil-a.com/ |
    
    # Scenario: Verify Explore the Menu button Functional Test Flow
    #     Given I am on the ".Com homepage" page
    #     And Mousehover on the Chick-fil-A One Icon logo and and click it
    #     And Verify Promo banner section Paragraphs
    #         | ParagraphText          |
    #         | Make every order count |
    #         | Join Chick-fil-A One   |
    #     And Click on Explore the Menu button
    #     Then Verify the URL Navigation
    #         | URLNavigation                |
    #         | https://www.chick-fil-a.com/menu |
    
    Scenario: Verify View full Menu button Functional Test Flow
        Given I am on the ".Com homepage" page
        And Mousehover on the Chick-fil-A One Icon logo and and click it
        # And Verify Promo banner section Paragraphs
        #     | ParagraphText          |
        #     | Make every order count |
        #     | Join Chick-fil-A One   |
        And Click on View Full Menu button
        Then Verify the URL Navigation
            | URLNavigation                |
            | https://www.chick-fil-a.com/menu |
    
    Scenario: Check See our Catering Menu button Functional Test Flow
        Given I am on the ".Com homepage" page
        And Mousehover on the Chick-fil-A One Icon logo and and click it
        # And Verify Promo banner section Paragraphs
        #     | ParagraphText          |
        #     | Make every order count |
        #     | Join Chick-fil-A One   |
        # And Click on See Our Catering Menu button
        And Click on View Our Catering Menu button
        Then Verify the URL NAvigation
            | URLNavigation                |
            | www.chick-fil-a.com/catering |
        And Verify the Nigation tabs displayed
            | navigationTabs | index |
            | Breakfast      | 0     |
            | Trays          | 1     |
            | Entrées        | 2     |
            | Salads & Wraps | 3     |
            | Sides & Treats | 4     |
            | Drinks         | 5     |
            | Packaged Meals | 6     |
    
    Scenario: Click on Join Today button and Verify the URL NAvigation
        Given I am on the ".Com homepage" page
        And Mousehover on the Chick-fil-A One Icon logo and and click it
        # And Verify Promo banner section Paragraphs
        #     | ParagraphText          |
        #     | Make every order count |
        #     | Join Chick-fil-A One   |
        Then Click on Join Today button and check the URL NAvigation
            | URLNavigation                   |
            | https://www.chick-fil-a.com/one |
    
    # Scenario: Click on Learn More button and Verify the URL Navigation
    #     Given I am on the ".Com homepage" page
    #     And Mousehover on the Chick-fil-A One Icon logo and and click it
    #     And Verify Promo banner section Paragraphs
    #         | ParagraphText          |
    #         | Make every order count |
    #         | Join Chick-fil-A One   |
    #     Then Click on Learn More button and Verify the URL Navigation
    #         | URLNavigation                   |
    #         | https://www.chick-fil-a.com/nutrition-allergens |
    #     And Verify the listed Nutrition tabs displayed on the Nutrition and Allergens page
    #         | NutritionTabs     | index |
    #         | Breakfast         | 0     |
    #         | Entrées           | 1     |
    #         | Salads            | 2     |
    #         | Sides             | 3     |
    #         | Kid's Meals       | 4     |
    #         | Treats            | 5     |
    #         | Drinks            | 6     |
    #         | Trays             | 7     |
    #         | Catering Entrées  | 8     |
    #         | Catering Drinks   | 9     |
    #         | Catering Sauces   | 10    |
    #         | Dipping Sauces    | 11    |
    #         | Dressings         | 12    |
    #         | Proteins          | 13    |
    #         | Sandwich Toppings | 14    |
    #         | Salad Toppings    | 15    |
    #         | Soup Toppings     | 16    |
    
    # Scenario: Click on Load More button and Verify the visible g_box sections in Home Page
    #     Given I am on the ".Com homepage" page
    #     And Mousehover on the Chick-fil-A One Icon logo and and click it
    #     And Verify Promo banner section Paragraphs
    #         | ParagraphText          |
    #         | Make every order count |
    #         | Join Chick-fil-A One   |
    #     And Verify visible g_box sections in Home Page
    #     Then Click on Load More button and Verify visible g_box sections in Home Page
    
    # Scenario: Verify Featured links on g_box sections in Home Page
    #     Given I am on the ".Com homepage" page
    #     And Mousehover on the Chick-fil-A One Icon logo and and click it
    #     And Verify Promo banner section Paragraphs
    #         | ParagraphText          |
    #         | Make every order count |
    #         | Join Chick-fil-A One   |
    #     And Verify visible g_box sections in Home Page
    #     Then Click on Featured links on g_box sections in Home Page and Verify the URL Validations
    #         | featuredLinks | launchedURLCheck                                       | index |
    #         | News          | https://www.chick-fil-a.com/stories/news               | 0     |
    #         | Food          | https://www.chick-fil-a.com/stories/food               | 1     |
    #         | Inside        | https://www.chick-fil-a.com/stories/inside-chick-fil-a | 2     |

    # Scenario: Verify day part animated section in Home Page
    #     Given I am on the ".Com homepage" page
    #     And Mousehover on the Chick-fil-A One Icon logo and and click it
    #     And Verify Promo banner section Paragraphs
    #         | ParagraphText          |
    #         | Make every order count |
    #         | Join Chick-fil-A One   |
    #     And Check Header line and Image in day part animated section in Home Page
    
    Scenario: Verify Content Header text and Image Links in Home Page
        Given I am on the ".Com homepage" page
        And Mousehover on the Chick-fil-A One Icon logo and and click it
        # And Verify Promo banner section Paragraphs
        #     | ParagraphText          |
        #     | Make every order count |
        #     | Join Chick-fil-A One   |
        Then Check Content Header text and Image Links in Home Page
            | ContentHeaderText             | ImageLinks                                                                                                                                                                                           | index |
            # | Get-togethers just got easier | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Halloweenn-catering-community-desktop.jpg?h=346&w=535&la=en                                                               | 0     |
            # | Cooler weather calls for warm | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Gift%20cards/Fall_Leaves_STATIC_desktop.png?h=320&w=535&la=en                                                                                   | 1     |
            # | Nutrition and allergens       | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Allergens.png/Allergens.png?h=75&w=51&la=en                                                                               | 2     |
            # | Food you can smile about      | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/May%20Menu%20Module/Updated%20May%20Menu%20Module%2005%2031/Trio_Sandwich_Desktop_535%20x%20467_Zoom.jpg?h=467&w=535&la=en| 3     |
            # | Earn points on your next order| https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Cling-06_red.png?h=125&w=125&la=en                                                                                        | 4     |
              | Eat more, receive more        | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Home%20Page%20Refresh%20V2/Eat%20more%20Receive%20more.jpg?h=416&w=636&la=en                                              | 0     |
              | Join us as we celebrate The Little Things | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Home%20Page%20Refresh/Home%20Page%20Refresh%20V2/ms.%20carol%20thumbnail_compressed.jpg?h=720&w=1280&la=en                          | 1     |

    Scenario: Verify Header lines in each section in Home Page
        Given I am on the ".Com homepage" page
        And Mousehover on the Chick-fil-A One Icon logo and and click it
        # And Verify Promo banner section Paragraphs
        #     | ParagraphText          |
        #     | Make every order count |
        #     | Join Chick-fil-A One   |
        And Check Header line in each section in Home Page
            | headerLineText                               | index |
            # | Catering for any gathering                   | 0     |
            # | The gift of Chick-fil-A® is always in season | 1     |
            # | Made with you in mind                        | 2     |
            # | Start earning                                | 3     |
            | Rewards                                        | 0 |
            | Holiday gift cards                             | 1 |
            
    
    Scenario: Verify Paragraph content in each section in Home Page
        Given I am on the ".Com homepage" page
        And Mousehover on the Chick-fil-A One Icon logo and and click it
        # And Verify Promo banner section Paragraphs
        #     | ParagraphText          |
        #     | Make every order count |
        #     | Join Chick-fil-A One   |
        Then Check Paragraph text in each section in Home Page
            | paragraphText                                         | index |
            # | If feeding a crowd is in your future, try Chick-fil-A | 0     |
            # | Whether you're in the mood for a freshly prepared     | 1     |
            | Order ahead on the app or online, and receive points from qualifying purchases | 0 |
            | You never know when the smallest thing can make someone’s day                  | 1 |
