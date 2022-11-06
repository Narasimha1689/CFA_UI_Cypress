Feature: About menu

    Scenario: Navigate to Who We are page
        Given I am on the ".Com homepage" page
        When Mousehover on the About Menu and click it
        And Verify User landed in default Who we are page

    Scenario: Click on Read about our commitment button in Who We Are page and verify the page element
        Given I am on the ".Com homepage" page
        When Mousehover on the About Menu and click it
        And Verify User landed in default Who we are page
        And Click on Read about our commitment button
        Then Verify user navigated to respective page

    Scenario: Reservation Home Page Validation
        Given I am on the ".Com homepage" page
        When Mousehover on the About Menu and click it
        And Verify User landed in default Who we are page
        And Click on Purchase Tickets button
        Then Verify the Reservation Home tickets page
    
    Scenario: Verify and Validate Sub-Menu Navigation items
        Given I am on the ".Com homepage" page
        When Mousehover on the About Menu and click it
        And Check and validate sub-menu navigation items

    Scenario: Navigate to Great Food Page and verify Header Text
        Given I am on the "About Great Food" page
        And Verify Great Food Header Text Page

    Scenario: Verify each Image links in Great Food page
        Given I am on the "About Great Food" page
        And Verify Great Food Header Text Page in Great Food page
        Then Verify each Image link in Great Food page
            | greatFoodImageLinks | index |
            | /-/media/default-website/headlesschef/desktop-chef-copy2.ashx | 0 |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/About%20Images/Great%20Food/Antibiotic-free/CFA_Great-Food_Antibiotic-Free.jpg | 1 |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/About%20Images/Great%20Food/Cage%20Free/Chicken%20Hash%20Brown%20Scramble%20Bowl%20and%20Burrito%20Beauty%20Image_master_retouch.png | 2 |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/About%20Images/Great%20Food/Thrive%20Farmers/CFA_Great-Food_Thrive-Farmers.jpg | 3 |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/About%20Images/Great%20Food/Sunkist/CFA_Great-Food_Sunkist.jpg | 4 |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/About%20Images/Great%20Food/Johnson-Agriprises/CFA_Great-Food_Johnson-Agripses.jpg | 5 |

    Scenario: Verify each Content Header of h2 tags in Great Food page
        Given I am on the "About Great Food" page
        And Verify Great Food Header Text Page in Great Food page
        Then Verify each Content Header of h2 tags in Great Food page
            | greatFoodh2ContentHeader | index |
            | Real food, rigorous standards | 0 |
            | Selective about the chicken we serve | 1 |
            | Going cage-free | 2 |
    
    Scenario: Verify each Content Header of h3 tags in Great Food page
        Given I am on the "About Great Food" page
        And Verify Great Food Header Text Page in Great Food page
        Then Verify each Content Header of h3 tags in Great Food page
            | greatFoodh3ContentHeader | index |
            | Farmer-direct coffee | 0 |
            | Lemons grown in the USA | 1 |
            | Always improving through potatoes  | 2 |
    @focus
    Scenario: Verify each Content Paragraph in Great Food page
        Given I am on the "About Great Food" page
        And Verify Great Food Header Text Page in Great Food page
        Then Verify each Content paragraph in Great Food page
            | paragraphContent | index |
            | In our kitchens, we try to focus on freshly prepared food crafted with quality ingredients. | 0 |
            | Serving quality food has always been our priority. Because chicken is at the center of our menu | 1 |
            | We’re dedicated to prioritizing ingredient transparency and responsible sourcing partnerships | 2 |
            | Thrive Farmers®, a specialty-grade coffee company, supplies our coffee for our restaurants in Canada | 3 |
            | Sunkist lemons come from groves in the U.S. Family-owned farms across California and Arizona work | 4 |
            | Idaho-based potato company Lamb Weston provides our Waffle Potato Fries™ and Hash Browns | 5 |
    
    Scenario: Verify download the report in Great Food page
        Given I am on the "About Great Food" page
        And Verify Great Food Header Text Page in Great Food page
        Then Verify download the report in Great Food page
    
    Scenario: Check Thrive Farmers URL navigation in Great Food page
        Given I am on the "About Great Food" page
        And Verify Great Food Header Text Page in Great Food page
        Then Verify Thrive Farmers URL navigation in Great Food page
            | paragraphLinks | greatFoodURLNavigation |
            | Thrive Farmers | https://thrivefarmers.com/ |
    
    Scenario: Check Puerto Rico URL navigation in Great Food page
        Given I am on the "About Great Food" page
        And Verify Great Food Header Text Page in Great Food page
        Then Verify Puerto Rico URL navigation in Great Food page
            | paragraphLinks | greatFoodURLNavigation |
            | Puerto Rico Coffee Roasters | https://prcoffee.com/ |
    
    Scenario: Check Lamb Weston URL navigation in Great Food page
        Given I am on the "About Great Food" page
        And Verify Great Food Header Text Page in Great Food page
        Then Verify Lamb Weston URL navigation in Great Food page
            | paragraphLinks | greatFoodURLNavigation |
            | Lamb Weston | https://www.lambweston.com/ |

    Scenario: Check sustainable potato URL navigation in Great Food page
        Given I am on the "About Great Food" page
        And Verify Great Food Header Text Page in Great Food page
        Then Verify sustainable potato URL navigation in Great Food page
            | paragraphLinks | greatFoodURLNavigation |
            | sustainable potato growing practices | https://www.lambweston.com/about/sustainability.html |
    
    Scenario: Navigate to Giving Back Page and verify Header Text
        Given I am on the "Giving Back" page
        And Verify Giving Back Header Text Page
    
    Scenario: Verify Local Communities Header Text in Giving Back page
        Given I am on the "Giving Back" page
        And Verify Giving Back Header Text Page
        Then Check Local Communities Header Text in Giving Back page
            | headerText                          | index |
            | Leading locally                     | 0 |
            | Restaurant Team Member scholarships | 1 |
            | Community grants                    | 2 |
    
    Scenario: Verify Local Communities Paragraph Content in Giving Back page
        Given I am on the "Giving Back" page
        And Verify Giving Back Header Text Page
        Then Check Local Communities Paragraph Content in Giving Back page
            | paragraphContent                                                                                    | index |
            | Chick-fil-A Operators are full-time, hands-on leaders in their restaurants and in their communities | 0 |
            | Scholarships at Chick-fil-A began when Truett Cathy set a mayonnaise jar on his first restaurant    | 1 |
            | Through our annual Chick-fil-A True Inspiration Awards, Operators have the opportunity to nominate  | 2 |

    Scenario: Verify Local Communities Navigation links in Giving Back page
        Given I am on the "Giving Back" page
        And Verify Giving Back Header Text Page
        Then Check Local Communities Navigation links in Giving Back page
            | NavigationLinks                                                              | index |
            | Read about Chick-fil-A Leader Academy and its impact on high school students | 0     |
            | Learn about scholarships and meet these scholars                             | 1     |
            | Learn more about our True Inspiration Awards                                 | 2     |
    
    Scenario: Verify the Image Links in Giving Back page
        Given I am on the "Giving Back" page
        And Verify Giving Back Header Text Page
        Then Check Image links in Giving Back page
            | imageLinks                                                                                                              | index |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/About%20Images/Giving%20Back/Our-Philosophy/Hug_Giving-Back_1440.jpg | 0     |
            | /-/media/images/cfacom/giving-back/shared-table-28_resized.ashx                                                         | 1     |
    
    Scenario: Perform Navigation links URL validations in Giving Back page
        Given I am on the "Giving Back" page
        And Verify Giving Back Header Text Page
        Then Check Navigation links URL validations in Giving Back page
            | NavigationLinks                                                              | index | NavigationURLs                                                                              |
            | Read about Chick-fil-A Leader Academy and its impact on high school students | 0     | https://www.chick-fil-a.com/stories/lifestyle/chick-fil-a-leader-academy-where-are-they-now |
            | Learn about scholarships and meet these scholars                             | 1     | https://www.chick-fil-a.com/remarkable-futures-scholarships                                 |
            | Learn more about our True Inspiration Awards                                 | 2     | https://www.chick-fil-a.com/true-inspiration-awards                                         |