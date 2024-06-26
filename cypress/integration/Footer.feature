@Regression
Feature: Footer section validations

    Scenario: All Footer Elements Exists or not
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check All Footer elements Exists or NOT
            | footerElements                              | index |
            | Nutrition & Allergens                       | 0     |
            | Customer Support                            | 1     |
            | Careers                                     | 2     |
            | Franchising                                 | 3     |
            | Merchandise                                 | 4     |
            | Press Room                                  | 5     |
            | Do business with us                         | 6     |
            | Terms and Conditions of Use                 | 7     |
            | Privacy Policy                              | 8     |
            | California Privacy Notice                   | 9     |
            | Cookie and Internet-Based Advertising Policy| 10    |
            | Cookie Preference Center                    | 11    |
            | Accessibility                               | 12    |
            | Locations listing                           | 13    |
            | Legal                                       | 14    |
    
    Scenario: All Social Media Icons Exists or not
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check All Social Media Icons Exists or NOT
            | socialMediaIcons | index |
            | Facebook         | 0     |
            | Instagram        | 1     |
            | Twitter          | 2     |
            | YouTube          | 3     |
            | LinkedIn         | 4     |

    Scenario: Verify Careers URL Navigation in Footer Section
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Careers URL Navigation in Footer Section
            | urlNavigation |
            | https://www.chick-fil-a.com/careers |
    
    Scenario: Verify Merchandise URL Navigation in Footer Section
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Merchandise URL Navigation in Footer Section
            | urlNavigation |
            | shop.chick-fil-a.com |
    
    Scenario: Verify Header Text and URL Navigation by clicking on Customer Support link in Footer Section
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL Navigation by clicking on Customer Support link in Footer Section
            | urlNavigation                                | headerText       |
            | https://www.chick-fil-a.com/customer-support | Customer Support |
    
    Scenario: Search Rewards in Text box and Verify the URL navigation in Customer Support Page
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL Navigation by clicking on Customer Support link in Footer Section
            | urlNavigation                                | headerText       |
            | https://www.chick-fil-a.com/customer-support | Customer Support |
        And Search Rewards in Text box field and click on Enter
            | searchText |
            | rewards    |
        And Verify the URL navigations
            | rewarsUrlNavigation                                               | rewardsHeaderText |
            | https://www.chick-fil-a.com/customer-support/search?query=rewards | FAQs              |
        # Then Click on the first ques and verify the URL Navigation
        #     | firstQuesURLNavigation |
        #     | https://www.chick-fil-a.com/customer-support/chick-fil-a-one-membership-program/points-and-rewards/how-do-i-receive-points-towards-rewards-of-my-choice |
    
    Scenario: Verify Each section Image and Paragraph in Suspicious Activity Row
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL Navigation by clicking on Customer Support link in Footer Section
            | urlNavigation                                | headerText       |
            | https://www.chick-fil-a.com/customer-support | Customer Support |
        And Check Each section Image and Paragraph in Suspicious Activity Row
            | imageLink                                                                                                                 | paragraphText        | index |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Customer%20Support/CFA_Icon_SecureDevice_Red_RGB.png?h=127&w=128&la=en | Suspicious Activity  | 0     |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Customer%20Support/MobileOrderRefund5.png?h=146&w=128&la=en            | Digital Order Refund | 1     |
            | https://d1fd34dzzl09j.cloudfront.net/2022/09/Quick%20Links%20Image/CFA_Icon_Settings_Red_PMS%20(1).png?h=238&w=216&la=en  | Reset Password       | 2     |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Customer%20Support/money-icon2.png?h=94&w=126&la=en                    | Missed Transactions  | 3     |
    
    Scenario: Click on Suspicious Activity section and Verify the URL Navigation flow
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL Navigation by clicking on Customer Support link in Footer Section
            | urlNavigation                                | headerText       |
            | https://www.chick-fil-a.com/customer-support | Customer Support |
        And Verify URL Navigation flow after clicking on Suspicious Activity section
            | sp_URLNavigation                                                                                    | headerTextSP         | index |
            | https://www.chick-fil-a.com/customer-support/chick-fil-a-one-membership-program/suspicious-activity | Suspicious Activity  | 0     |
        Then Click on the First Question link
        And Verify the URL Navigation
            | urlNavigation                                                                                                                                                   |
            | https://www.chick-fil-a.com/customer-support/chick-fil-a-one-membership-program/suspicious-activity/what-should-i-do-if-i-see-suspicious-activity-on-my-account |
    
    Scenario: Perform Paragraph Text and Image validation after clicking on Suspicious Activity page first Question
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL Navigation by clicking on Customer Support link in Footer Section
            | urlNavigation                                | headerText       |
            | https://www.chick-fil-a.com/customer-support | Customer Support |
        And Verify URL Navigation flow after clicking on Suspicious Activity section
            | sp_URLNavigation                                                                                    | headerTextSP         | index |
            | https://www.chick-fil-a.com/customer-support/chick-fil-a-one-membership-program/suspicious-activity | Suspicious Activity  | 0     |
        Then Click on the First Question link
        And Verify the URL Navigation
            | urlNavigation                                                                                                                                                   |
            | https://www.chick-fil-a.com/customer-support/chick-fil-a-one-membership-program/suspicious-activity/what-should-i-do-if-i-see-suspicious-activity-on-my-account |
        Then Verify ParagraphText after clicking on First Question
            | paragraphText                                                                                |
            | Immediately reset your Chick-fil-A One account password |
    
    Scenario: Verify Chick-fil-A One Membership Program List Members
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL Navigation by clicking on Customer Support link in Footer Section
            | urlNavigation                                | headerText       |
            | https://www.chick-fil-a.com/customer-support | Customer Support |
        And Check Chick-fil-A One Membership Navigation links
            | navLinks                         |
            | Suspicious Activity              | 
            | Creating & Managing Your Account |
            | Benefits & Tiers                 |
            | Points & Rewards                 |
            | Gifting                          |
            | Coupons                          |
    
    Scenario: Verify Ordering and Payment Program List Members
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL Navigation by clicking on Customer Support link in Footer Section
            | urlNavigation                                | headerText       |
            | https://www.chick-fil-a.com/customer-support | Customer Support |
        And Check Ordering and Payment Navigation links
            | navLinks                         |
            | Digital Ordering and Payment     | 
            | Delivery                         |
            | Digital Offer Cards              |
            | Catering Orders                  |
            | Gift Cards                       |
            | Missed Transactions              |
    
    Scenario: Verify Our Food Navigation links
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL Navigation by clicking on Customer Support link in Footer Section
            | urlNavigation                                | headerText       |
            | https://www.chick-fil-a.com/customer-support | Customer Support |
        And Check Our Food Navigation links
            | navLinks                         |
            | Digital Ordering and Payment     | 
            | Delivery                         |
            | Digital Offer Cards              |
            | Catering Orders                  |
            | Gift Cards                       |
            | Missed Transactions              |
    
    Scenario: Verify Careers Navigation links under Customer Support Page
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL Navigation by clicking on Customer Support link in Footer Section
            | urlNavigation                                | headerText       |
            | https://www.chick-fil-a.com/customer-support | Customer Support |
        And Check Careers Navigation links under Customer Support Page
            | navLinks                                |
            | Working at a Chick-fil-A restaurant     | 
            | Franchise Opportunities                 |
            | Working at the Corporate Support Center |
            | Internships                             |
            | Leadership Development Program          |
            | Subsidiary Opportunities                |
            | Licensing Opportunities                 |
    
    Scenario: Verify Who We Are Navigation links under Customer Support Page
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL Navigation by clicking on Customer Support link in Footer Section
            | urlNavigation                                | headerText       |
            | https://www.chick-fil-a.com/customer-support | Customer Support |
        And Check Who We Are Navigation links under Customer Support Page
            | navLinks               |
            | Giving Back            | 
            | Our Culture and Values |
            | Our Leaders            |
            | Our Restaurants        |
            | Our Subsidiaries       |
    
    Scenario: Verify Events And Promotions Navigation links under Customer Support Page
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL Navigation by clicking on Customer Support link in Footer Section
            | urlNavigation                                | headerText       |
            | https://www.chick-fil-a.com/customer-support | Customer Support |
        And Check Events And Promotions Navigation links under Customer Support Page
            | navLinks                   |
            | Cow Appreciation Day       | 
            | First 100                  |
            | Receipt Survey             |
            | Stories of Evergreen Hills |
            | Market-Level Giveaways     |
            | Local Events               |
    
    Scenario: Verify All Social Media Icons Exists or NOT under Customer Support Page
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL Navigation by clicking on Customer Support link in Footer Section
            | urlNavigation                                | headerText       |
            | https://www.chick-fil-a.com/customer-support | Customer Support |
        And Check All Social Media Icons Exists or NOT under Customer Support Page
            | socialMediaIcons | index |
            | Facebook         | 0     |
            | Instagram        | 1     |
            | Twitter          | 2     |
            | YouTube          | 3     |
            | LinkedIn         | 4     |
    
    Scenario: Click on Submit Feedback and Verify each section image and paragraph text
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL Navigation by clicking on Customer Support link in Footer Section
            | urlNavigation                                | headerText       |
            | https://www.chick-fil-a.com/customer-support | Customer Support |
        And Click on Submit Feedback
        Then Verify URL validation
            | urlNavigation                                        |
            | https://www.chick-fil-a.com/customer-service/contact |
        And Verify Each section image and paragraph text
            | imageLink                                                                                                              | paragraphText                          | index | 
            | https://d1fd34dzzl09j.cloudfront.net/Images/Listen%20Love%20Learn/orders-and-restaurant-experience.svg?h=30&w=48&la=en | Order & Restaurant Experience Feedback | 0     |
            | https://d1fd34dzzl09j.cloudfront.net/Images/Listen%20Love%20Learn/menu.svg?h=48&w=36&la=en                             | Menu Information & Suggestions         | 1     |
            | https://d1fd34dzzl09j.cloudfront.net/Images/Listen%20Love%20Learn/business-operations.svg?h=48&w=42&la=en              | General & Marketing Inquiries          | 2     |
            | https://d1fd34dzzl09j.cloudfront.net/Images/Listen%20Love%20Learn/Icon_WebAppTreats-01.png?h=64&w=64&la=en             | Technical & Account Support            | 3     |
    
    Scenario: Perform Phone Number Validation in Customer Service Page.
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL Navigation by clicking on Customer Support link in Footer Section
            | urlNavigation                                | headerText       |
            | https://www.chick-fil-a.com/customer-support | Customer Support |
        And Verify Phone Number Details
    
    Scenario: Verify All Social Media Icons Exists or NOT under Press Room Page
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL Navigation by clicking on Press Room Page
            | urlNavigation                                  | headerText       |
            | https://www.chick-fil-a.com/stories/press-room | The Press Room   |
        And Check All Social Media Icons Exists or NOT under Press Room Page
            | socialMediaIcons | index |
            | Facebook         | 0     |
            | Instagram        | 1     |
            | Twitter          | 2     |
            | YouTube          | 3     |
            | LinkedIn         | 4     |
    
    Scenario: Verify Header Text and URL Navigation by clicking on Press Room Page
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL Navigation by clicking on Press Room Page
            | urlNavigation                                  | headerText     |
            | https://www.chick-fil-a.com/stories/press-room | The Press Room |
    
    Scenario: Verify Image links in Press Room Page
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL Navigation by clicking on Press Room Page
            | urlNavigation                                  | headerText     |
            | https://www.chick-fil-a.com/stories/press-room | The Press Room |
        And Perform image link validations in Press Room page
            | imageLinks                                                                                                                                  | index |
            | https://d1fd34dzzl09j.cloudfront.net/2022/11/Evergreen%20Press%20Release%202022/large-Evergreen_THE_SNOW_GLOBE_11zon.jpg?h=852&w=1280&la=en | 0     |
            | https://d1fd34dzzl09j.cloudfront.net/2022/11/Peppermint-Chip-Milkshake-press-release-header.jpeg?h=960&w=1440&la=en                         | 1     |
            | https://d1fd34dzzl09j.cloudfront.net/2022/10/Hawaii-Rendering.png?h=654&w=1055&la=en                                                        | 2     |
            | https://d1fd34dzzl09j.cloudfront.net/2022/10/large-CFA_Salad%20Dressings_Pilot_Fall%202022.jpg?h=798&w=1280&la=en                           | 3     |
   
   
    Scenario: Verify each flex section Header Text and Paragraph Text in Press Room Page
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL Navigation by clicking on Press Room Page
            | urlNavigation                                  | headerText     |
            | https://www.chick-fil-a.com/stories/press-room | The Press Room |
        And Verify header text and paragraph text in Press Room page
            | headerText                                      | paragraphText                                                                     | index |
            | The Snow Globe: A Chick-fil-A Original Story    | Chick-fil-A’s annual animated film series the Stories of Evergreen Hills™ returns | 0     |
            | Chick-fil-A Helps Spark Joy This Season with    | Chick-fil-A is welcoming back seasonal favorites Peppermint Chip Milkshake        | 1     |
            | First Chick-fil-A Restaurant on O‘ahu to Open   | Read about the second Chick-fil-A restaurant in the state of Hawai‘i to open      | 2     |
            | Chick-fil-A Expands Retail Footprint with Salad | 12 fluid ounce bottles of Chick-fil-A's popular salad dressings are piloting      | 3     |
    # 
    # Scenario: Verify Future Openings Flow in Press Room Page
    #     Given I am on the ".Com homepage" page
    #     And Verify Footer section is visible or not
    #     Then Check Header Text and URL Navigation by clicking on Press Room Page
    #         | urlNavigation                                  | headerText     |
    #         | https://www.chick-fil-a.com/stories/press-room | The Press Room |
    #     And Check Future Openings header text in Press Room page
    #         | headerText      |
    #         | Future Openings |
        # Then Verify Each URL navigation after clicking on Each Country Link
        #     | urlNavigation                                        | index |
        #     | https://www.chick-fil-a.com/locations/ia/pella-ia    | 0     |
        #     | https://www.chick-fil-a.com/locations/tx/mercedes-tx | 1     |
        #     | https://www.chick-fil-a.com/locations/mi/monroe-mi   | 2     |
    
    Scenario: Verify countries list displayed underFuture Openings in Press Room Page
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL Navigation by clicking on Press Room Page
            | urlNavigation                                  | headerText     |
            | https://www.chick-fil-a.com/stories/press-room | The Press Room |
        And Check Future Openings header text in Press Room page
            | headerText      |
            | Future Openings |
        And Click on Show More link
        Then Verify the count of countries list dispalyed is 6
        # Then Verify Each URL navigation after clicking on Each Country Link
        #     | countriesList     | index |
        #     | Pella (IA)        | 0     |
        #     | Mercedes [TX]     | 1     |
        #     | Monroe (MI)       | 2     |
        #     | Meyer Park Center | 3     |
        #     | Springfield (OH)  | 4     |
        #     | Citadel Crossing  | 5     |
    
    Scenario: Verify Press Contacts Flow in Press Room Page
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL Navigation by clicking on Press Room Page
            | urlNavigation                                  | headerText     |
            | https://www.chick-fil-a.com/stories/press-room | The Press Room |
        And Check Press Contacts header text in Press Room page
            | headerText      |
            | Press Contacts |
        Then Verify displayed links under Press Contacts section
            | displayedLinks               |
            | (800) 404-7196               |
            | cfapressroom@chick-fil-a.com |
            | Form Link                    |
        And Click on the Form link and Verify the url Navigation
            | urlNAvigation                                                     |
            | https://www.chick-fil-a.com/stories/press-room/media-request-form | 
    
    Scenario: Verify All Social Media Icons Exists or NOT under Nutritions and Allergions Page
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL Navigation by clicking on Nutritions and Allergions Page
            | urlNavigation                                   | headerText       |
            | https://www.chick-fil-a.com/nutrition-allergens | Nutrition & Allergens |
        And Check All Social Media Icons Exists or NOT under Nutritions and Allergions Page
            | socialMediaIcons | index |
            | Facebook         | 0     |
            | Instagram        | 1     |
            | Twitter          | 2     |
            | YouTube          | 3     |
            | LinkedIn         | 4     |
    
    Scenario: Verify Header Text and URL Navigation by clicking on Nutritions and Allergions Page
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL Navigation by clicking on Nutritions and Allergions Page
            | urlNavigation                                   | headerText     |
            | https://www.chick-fil-a.com/nutrition-allergens | Nutrition & Allergens |
    
    Scenario: Verify Nutrition and Allergion Tabs and Switch the tabs in Nutritions and Allergions Page
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL Navigation by clicking on Nutritions and Allergions Page
            | urlNavigation                                   | headerText            |
            | https://www.chick-fil-a.com/nutrition-allergens | Nutrition & Allergens |
        And Verify the listed Nutrition tabs displayed on the Nutrition and Allergens page
            | NutritionTabs     | index |
            | Breakfast         | 0     |
            | Entrées           | 1     |
            | Salads            | 2     |
            | Sides             | 3     |
            | Kid's Meals       | 4     |
            | Treats            | 5     |
            | Drinks            | 6     |
            | Trays             | 7     |
            | Catering Entrées  | 8     |
            | Catering Drinks   | 9     |
            | Catering Sauces   | 10    |
            | Dipping Sauces    | 11    |
            | Dressings         | 12    |
            | Proteins          | 13    |
            | Sandwich Toppings | 14    |
            | Salad Toppings    | 15    |
            | Soup Toppings     | 16    |
        Then Click on the Allergion Tab
        And Verify the listed Allergion tabs displayed on the Nutrition and Allergens page
            | allergensTab      | index |
            | Breakfast         | 0     |
            | Entrées           | 1     |
            | Salads            | 2     |
            | Sides             | 3     |
            | Kid's Meals       | 4     |
            | Treats            | 5     |
            | Drinks            | 6     |
            | Trays             | 7     |
            | Catering Entrées  | 8     |
            | Catering Drinks   | 9     |
            | Catering Sauces   | 10    |
            | Dipping Sauces    | 11    |
            | Dressings         | 12    |
            | Proteins          | 13    |
            | Sandwich Toppings | 14    |
            | Salad Toppings    | 15    |
            | Soup Toppings     | 16    |
      
    Scenario: Verify Footer Validations from About Who We Are Page
        Given I am on the "About Who We Are" page
        When Check URL Navigation and Header Text in Who We Are Page
            | urlNavigation                                | headerText |
            | https://www.chick-fil-a.com/about/who-we-are | who we are |
        And Verify Footer section is visible or not
        Then Check All Footer elements Exists or NOT
            | footerElements                              | index |
            | Nutrition & Allergens                       | 0     |
            | Customer Support                            | 1     |
            | Careers                                     | 2     |
            | Franchising                                 | 3     |
            | Merchandise                                 | 4     |
            | Press Room                                  | 5     |
            | Do business with us                         | 6     |
            | Terms and Conditions of Use                 | 7     |
            | Privacy Policy                              | 8     |
            | California Privacy Notice                   | 9     |
            | Cookie and Internet-Based Advertising Policy| 10    |
            | Cookie Preference Center                    | 11    |
            | Accessibility                               | 12    |
            | Locations listing                           | 13    |
            | Legal                                       | 14    |
        Then Check All Social Media Icons Exists or NOT
            | socialMediaIcons | index |
            | Facebook         | 0     |
            | Instagram        | 1     |
            | Twitter          | 2     |
            | YouTube          | 3     |
            | LinkedIn         | 4     |
    
    Scenario: Verify Footer Validations from About Great Food Page
        Given I am on the "About Great Food" page
        When Check URL Navigation and Header Text in Great Food Page
            | urlNavigation                                | headerText |
            | https://www.chick-fil-a.com/about/great-food | great food |
        And Verify Footer section is visible or not
        Then Check All Footer elements Exists or NOT
            | footerElements                              | index |
            | Nutrition & Allergens                       | 0     |
            | Customer Support                            | 1     |
            | Careers                                     | 2     |
            | Franchising                                 | 3     |
            | Merchandise                                 | 4     |
            | Press Room                                  | 5     |
            | Do business with us                         | 6     |
            | Terms and Conditions of Use                 | 7     |
            | Privacy Policy                              | 8     |
            | California Privacy Notice                   | 9     |
            | Cookie and Internet-Based Advertising Policy| 10    |
            | Cookie Preference Center                    | 11    |
            | Accessibility                               | 12    |
            | Locations listing                           | 13    |
            | Legal                                       | 14    |
        Then Check All Social Media Icons Exists or NOT
            | socialMediaIcons | index |
            | Facebook         | 0     |
            | Instagram        | 1     |
            | Twitter          | 2     |
            | YouTube          | 3     |
            | LinkedIn         | 4     |
    
    Scenario: Verify Footer Validations from About Giving Back Page
        Given I am on the "About Giving Back" page
        When Check URL Navigation and Header Text in Giving Back Page
            | urlNavigation                                 | headerText  |
            | https://www.chick-fil-a.com/about/giving-back | giving back |
        And Verify Footer section is visible or not
        Then Check All Footer elements Exists or NOT
            | footerElements                              | index |
            | Nutrition & Allergens                       | 0     |
            | Customer Support                            | 1     |
            | Careers                                     | 2     |
            | Franchising                                 | 3     |
            | Merchandise                                 | 4     |
            | Press Room                                  | 5     |
            | Do business with us                         | 6     |
            | Terms and Conditions of Use                 | 7     |
            | Privacy Policy                              | 8     |
            | California Privacy Notice                   | 9     |
            | Cookie and Internet-Based Advertising Policy| 10    |
            | Cookie Preference Center                    | 11    |
            | Accessibility                               | 12    |
            | Locations listing                           | 13    |
            | Legal                                       | 14    |
        Then Check All Social Media Icons Exists or NOT
            | socialMediaIcons | index |
            | Facebook         | 0     |
            | Instagram        | 1     |
            | Twitter          | 2     |
            | YouTube          | 3     |
            | LinkedIn         | 4     |
    
    Scenario: Verify Footer Validations from About History Page
        Given I am on the "About History" page
        When Check URL Navigation and Header Text in History Page
            | urlNavigation                             | headerText |
            | https://www.chick-fil-a.com/about/history | history |
        And Verify Footer section is visible or not
        Then Check All Footer elements Exists or NOT
            | footerElements                              | index |
            | Nutrition & Allergens                       | 0     |
            | Customer Support                            | 1     |
            | Careers                                     | 2     |
            | Franchising                                 | 3     |
            | Merchandise                                 | 4     |
            | Press Room                                  | 5     |
            | Do business with us                         | 6     |
            | Terms and Conditions of Use                 | 7     |
            | Privacy Policy                              | 8     |
            | California Privacy Notice                   | 9     |
            | Cookie and Internet-Based Advertising Policy| 10    |
            | Cookie Preference Center                    | 11    |
            | Accessibility                               | 12    |
            | Locations listing                           | 13    |
            | Legal                                       | 14    |
        Then Check All Social Media Icons Exists or NOT
            | socialMediaIcons | index |
            | Facebook         | 0     |
            | Instagram        | 1     |
            | Twitter          | 2     |
            | YouTube          | 3     |
            | LinkedIn         | 4     |
    
    Scenario: Verify Footer Validations from About S.TruttCathyBrandRestaurants Page
        Given I am on the "About s-truett-cathy" page
        When Check URL Navigation and Header Text in About S.TruttCathyBrandRestaurants Page
            | urlNavigation                                                      | headerText                        |
            | https://www.chick-fil-a.com/about/s-truett-cathy-brand-restaurants | s. truett cathy brand restaurants |
        And Verify Footer section is visible or not
        Then Check All Footer elements Exists or NOT
            | footerElements                              | index |
            | Nutrition & Allergens                       | 0     |
            | Customer Support                            | 1     |
            | Careers                                     | 2     |
            | Franchising                                 | 3     |
            | Merchandise                                 | 4     |
            | Press Room                                  | 5     |
            | Do business with us                         | 6     |
            | Terms and Conditions of Use                 | 7     |
            | Privacy Policy                              | 8     |
            | California Privacy Notice                   | 9     |
            | Cookie and Internet-Based Advertising Policy| 10    |
            | Cookie Preference Center                    | 11    |
            | Accessibility                               | 12    |
            | Locations listing                           | 13    |
            | Legal                                       | 14    |
        Then Check All Social Media Icons Exists or NOT
            | socialMediaIcons | index |
            | Facebook         | 0     |
            | Instagram        | 1     |
            | Twitter          | 2     |
            | YouTube          | 3     |
            | LinkedIn         | 4     |

    Scenario: Verify Footer Validations from Stories Food Page
        Given   I am on the "Stories" page
        When I click on the "Food" section
        When Check URL Navigation and Header Text in Stories Food Page
            | urlNavigation                            | headerText |
            | https://www.chick-fil-a.com/stories/food | food       |
        And Verify Footer section is visible or not
        Then Check All Footer elements Exists or NOT
            | footerElements                              | index |
            | Nutrition & Allergens                       | 0     |
            | Customer Support                            | 1     |
            | Careers                                     | 2     |
            | Franchising                                 | 3     |
            | Merchandise                                 | 4     |
            | Press Room                                  | 5     |
            | Do business with us                         | 6     |
            | Terms and Conditions of Use                 | 7     |
            | Privacy Policy                              | 8     |
            | California Privacy Notice                   | 9     |
            | Cookie and Internet-Based Advertising Policy| 10    |
            | Cookie Preference Center                    | 11    |
            | Accessibility                               | 12    |
            | Locations listing                           | 13    |
            | Legal                                       | 14    |
        Then Check All Social Media Icons Exists or NOT
            | socialMediaIcons | index |
            | Facebook         | 0     |
            | Instagram        | 1     |
            | Twitter          | 2     |
            | YouTube          | 3     |
            | LinkedIn         | 4     |

    Scenario: Verify Footer Validations from Stories Lifestyle Page
        Given   I am on the "Stories" page
        When I click on the Lifestyle section
        When Verify URL Navigation and Header Text in Stories Lifestyle Page
            | urlNavigation                                 | headerText |
            | https://www.chick-fil-a.com/stories/lifestyle | lifestyle  | 
        And Verify Footer section is visible or not
        Then Check All Footer elements Exists or NOT
            | footerElements                              | index |
            | Nutrition & Allergens                       | 0     |
            | Customer Support                            | 1     |
            | Careers                                     | 2     |
            | Franchising                                 | 3     |
            | Merchandise                                 | 4     |
            | Press Room                                  | 5     |
            | Do business with us                         | 6     |
            | Terms and Conditions of Use                 | 7     |
            | Privacy Policy                              | 8     |
            | California Privacy Notice                   | 9     |
            | Cookie and Internet-Based Advertising Policy| 10    |
            | Cookie Preference Center                    | 11    |
            | Accessibility                               | 12    |
            | Locations listing                           | 13    |
            | Legal                                       | 14    |
        Then Check All Social Media Icons Exists or NOT
            | socialMediaIcons | index |
            | Facebook         | 0     |
            | Instagram        | 1     |
            | Twitter          | 2     |
            | YouTube          | 3     |
            | LinkedIn         | 4     |
    
    Scenario: Verify Footer Validations from Stories Inside ChickfilA Page
        Given   I am on the "Stories" page
        When I click on the Inside ChickfilA section
        When Verify URL Navigation and Header Text in Stories Inside ChickfilA Page
            | urlNavigation                                          | headerText  |
            | https://www.chick-fil-a.com/stories/inside-chick-fil-a | inside chick-fil-a | 
        And Verify Footer section is visible or not
        Then Check All Footer elements Exists or NOT
            | footerElements                              | index |
            | Nutrition & Allergens                       | 0     |
            | Customer Support                            | 1     |
            | Careers                                     | 2     |
            | Franchising                                 | 3     |
            | Merchandise                                 | 4     |
            | Press Room                                  | 5     |
            | Do business with us                         | 6     |
            | Terms and Conditions of Use                 | 7     |
            | Privacy Policy                              | 8     |
            | California Privacy Notice                   | 9     |
            | Cookie and Internet-Based Advertising Policy| 10    |
            | Cookie Preference Center                    | 11    |
            | Accessibility                               | 12    |
            | Locations listing                           | 13    |
            | Legal                                       | 14    |
        Then Check All Social Media Icons Exists or NOT
            | socialMediaIcons | index |
            | Facebook         | 0     |
            | Instagram        | 1     |
            | Twitter          | 2     |
            | YouTube          | 3     |
            | LinkedIn         | 4     |
    
    Scenario: Verify Footer Validations from Stories News Page
        Given   I am on the "Stories" page
        When I click on the News section
        When Verify URL Navigation and Header Text in Stories News Page
            | urlNavigation                                  | headerText     |
            | https://www.chick-fil-a.com/stories/press-room | the press room | 
        And Verify Footer section is visible or not
        Then Check All Footer elements Exists or NOT
            | footerElements                              | index |
            | Nutrition & Allergens                       | 0     |
            | Customer Support                            | 1     |
            | Careers                                     | 2     |
            | Franchising                                 | 3     |
            | Merchandise                                 | 4     |
            | Press Room                                  | 5     |
            | Do business with us                         | 6     |
            | Terms and Conditions of Use                 | 7     |
            | Privacy Policy                              | 8     |
            | California Privacy Notice                   | 9     |
            | Cookie and Internet-Based Advertising Policy| 10    |
            | Cookie Preference Center                    | 11    |
            | Accessibility                               | 12    |
            | Locations listing                           | 13    |
            | Legal                                       | 14    |
        Then Check All Social Media Icons Exists or NOT
            | socialMediaIcons | index |
            | Facebook         | 0     |
            | Instagram        | 1     |
            | Twitter          | 2     |
            | YouTube          | 3     |
            | LinkedIn         | 4     |
    
    
    
    