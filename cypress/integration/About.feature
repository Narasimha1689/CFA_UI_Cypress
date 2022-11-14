Feature: About menu

    Scenario: Navigate to Who We are page by About Click
        Given I am on the ".Com homepage" page
        When Mousehover on the About Menu and click it
        And Verify User landed in default Who we are page
    
    Scenario: Click on Read about our commitment button in Who We Are page and verify the page element
        Given I am on the "About Who We Are" page
        And Check Header Text in Who We Are Page
        And Click on Read about our commitment button
        Then Verify user navigated to respective page
            | navURL |
            | https://www.chick-fil-a.com/dei |
        And Verify the Header Text
            
    Scenario: Reservation Home Page Validation
        Given I am on the "About Who We Are" page
        And Check Header Text in Who We Are Page
        And Click on Purchase Tickets button
        Then Verify the Reservation Home tickets page
            | URLCheck |
            | https://tours.chick-fil-a.com/tours/Home/Reservation?_gl=1*bioa17*_ga*MTkwMDg2Mjc3MS4xNjY2OTM1Njkz*_ga_W1ZL54JC7M*MTY2NzgzNjAzNy4xMC4xLjE2Njc4NDgxOTQuNDcuMC4w |
    
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
        Given I am on the "About Giving Back" page
        And Verify Giving Back Header Text Page
    
    Scenario: Verify Local Communities Header Text in Giving Back page
        Given I am on the "About Giving Back" page
        And Verify Giving Back Header Text Page
        Then Check Local Communities Header Text in Giving Back page
            | headerText                          | index |
            | Leading locally                     | 0 |
            | Restaurant Team Member scholarships | 1 |
            | Community grants                    | 2 |
    
    Scenario: Verify Local Communities Paragraph Content in Giving Back page
        Given I am on the "About Giving Back" page
        And Verify Giving Back Header Text Page
        Then Check Local Communities Paragraph Content in Giving Back page
            | paragraphContent                                                                                    | index |
            | Chick-fil-A Operators are full-time, hands-on leaders in their restaurants and in their communities | 0 |
            | Scholarships at Chick-fil-A began when Truett Cathy set a mayonnaise jar on his first restaurant    | 1 |
            | Through our annual Chick-fil-A True Inspiration Awards, Operators have the opportunity to nominate  | 2 |

    Scenario: Verify Local Communities Navigation links in Giving Back page
        Given I am on the "About Giving Back" page
        And Verify Giving Back Header Text Page
        Then Check Local Communities Navigation links in Giving Back page
            | NavigationLinks                                                              | index |
            | Read about Chick-fil-A Leader Academy and its impact on high school students | 0     |
            | Learn about scholarships and meet these scholars                             | 1     |
            | Learn more about our True Inspiration Awards                                 | 2     |
    
    Scenario: Verify the Image Links in Giving Back page
        Given I am on the "About Giving Back" page
        And Verify Giving Back Header Text Page
        Then Check Image links in Giving Back page
            | imageLinks                                                                                                              | index |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/About%20Images/Giving%20Back/Our-Philosophy/Hug_Giving-Back_1440.jpg | 0     |
            | /-/media/images/cfacom/giving-back/shared-table-28_resized.ashx                                                         | 1     |
    
    Scenario: Perform Navigation links URL validations in Giving Back page
        Given I am on the "About Giving Back" page
        And Verify Giving Back Header Text Page
        Then Check Navigation links URL validations in Giving Back page
            | NavigationLinks                                                              | index | NavigationURLs                                                                              |
            | Read about Chick-fil-A Leader Academy and its impact on high school students | 0     | https://www.chick-fil-a.com/stories/lifestyle/chick-fil-a-leader-academy-where-are-they-now |
            | Learn about scholarships and meet these scholars                             | 1     | https://www.chick-fil-a.com/remarkable-futures-scholarships                                 |
            | Learn more about our True Inspiration Awards                                 | 2     | https://www.chick-fil-a.com/true-inspiration-awards                                         |
    
    Scenario: Navigate to History Page and verify Header Text
        Given I am on the "About History" page
        And Check Header Text in History page
    
    Scenario: Verify the Image Links under company history in History page
        Given I am on the "About History" page
        And Check Header Text in History page
        Then Check Image links under company history in History page
            | imageLinks                                                                                                                                   | index |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/About%20Images/History/Dwarf%20Grill/History_Dwarf-House.jpg?h=448&w=518&la=en            | 0     |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/About%20Images/History/Truett-Making-Sandwich/History_Chix-Sandwich.jpg?h=448&w=518&la=en | 1     |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/About%20Images/History/Headquarters/History_HQ-Opens.jpg?h=448&w=518&la=en                | 2     |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/About%20Images/History/First-Restaurant/History_Freestanding.jpg?h=448&w=518&la=en        | 3     |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/About%20Images/History/HistoryEMCCows.jpg?h=448&w=518&la=en                               | 4     |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/About%20Images/History/Peach-Bowl/History_Peach-Bowl.jpg?h=448&w=518&la=en                | 5     |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/About%20Images/History/2-billion/History_2-Bill.jpg?h=448&w=518&la=en                     | 6     |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/About%20Images/History/Madison-avenue/History_Mad-Ave.jpg?h=448&w=518&la=en               | 7     |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/About%20Images/History/Truett/History_Truett-93.jpg?h=448&w=518&la=en                     | 8     |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/About%20Images/History/CFA-NYC/History_CFA-NYC.jpg?h=448&w=518&la=en                      | 9     |
    
    Scenario: Verify Company history left pane navigation items in History page
        Given I am on the "About History" page
        And Check Header Text in History page
        Then Check Company history left pane Navigation items under company history in History page
            | leftPaneNavItems                           | index |
            | Dwarf Grill                                | 0     |
            | Original Chicken Sandwich                  | 1     |
            | Corporate Headquarters                     | 2     |
            | First free-standing Chick-fil-A restaurant | 3     |
            | Eat Mor Chikin                             | 4     |
            | Peach Bowl                                 | 5     |
            | $2 Billion                                 | 6     |
            | Advertising Walk of Fame                   | 7     |
            | Truett Passes Away at 93                   | 8     |
            | Chick-fil-A opens in New York City         | 9     |
    
    Scenario: Verify Header Text displayed on right for each left pane navigation items in History page
        Given I am on the "About History" page
        And Check Header Text in History page
        Then Check Header Text displayed on right for each left pane navigation items
            | leftPaneNavItems                           | rightSideHeaderText                                         | index |
            | Dwarf Grill                                | 1946: Dwarf Grill                                           | 0     |
            | Original Chicken Sandwich                  | 1964: Original Chicken Sandwich                             | 1     |
            | Corporate Headquarters                     | 1984: Corporate Headquarters                                | 2     |
            | First free-standing Chick-fil-A restaurant | 1986: First free-standing Chick-fil-A restaurant            | 3     |
            | Eat Mor Chikin                             | 1995: Eat Mor Chikin                                        | 4     |
            | Peach Bowl                                 | 1996: Chick-fil-A Peach Bowl                                | 5     |
            | $2 Billion                                 | 2006: Chick-fil-A surpasses $2 billion in system-wide sales | 6     |
            | Advertising Walk of Fame                   | 2007: Advertising Walk of Fame                              | 7     |
            | Truett Passes Away at 93                   | 2014: S. Truett Cathy passes away at 93                     | 8     |
            | Chick-fil-A opens in New York City         | 2015: Chick-fil-A opens in NYC                              | 9     |

    Scenario: Verify Paragraph Text displayed on right for each left pane navigation items in History page
        Given I am on the "About History" page
        And Check Header Text in History page
        Then Check Paragraph Text displayed on right for each left pane navigation items
            | leftPaneNavItems                           | paragraphText                                                                                        | index |
            | Dwarf Grill                                | Truett Cathy opens his original diner, the Dwarf Grill, in the Atlanta suburb of Hapeville           | 0     |
            | Original Chicken Sandwich                  | After testing out hundreds of recipes, Truett Cathy creates the recipe for the original chicken      | 1     |
            | Corporate Headquarters                     | Chick-fil-A established its corporate headquarters, recently renamed the Support Center              | 2     |
            | First free-standing Chick-fil-A restaurant | Chick-fil-A moves outside of the mall food court in 1986, opening its first stand-alone restaurant   | 3     |
            | Eat Mor Chikin                             | The first advertising campaign featuring Holstein cows with the message                              | 4     |
            | Peach Bowl                                 | Chick-fil-A announces title sponsorship of one of the country's longest standing bowl games          | 5     |
            | $2 Billion                                 | For the first time, Chick-fil-A sales surpass $2 billion, securing the family-owned company          | 6     |
            | Advertising Walk of Fame                   | Advertising Week honors the Chick-fil-A "Eat Mor Chikin®" Cows as one of America’s most popular      | 7     |
            | Truett Passes Away at 93                   | After a long and meaningful life, Chick-fil-A founder Truett Cathy passes away                       | 8     |
            | Chick-fil-A opens in New York City         | In 2015 Chick-fil-A opens its doors in the heart of the Big Apple's Garment District at 37th and 6th | 9     |
    
    Scenario: Verify URL Navigation by Clicking on Read More button
        Given I am on the "About History" page
        And Check Header Text in History page
        Then Click on Read More link
        And Verify the URL Launched
            | humbleBeginningsURL |
            | https://www.chick-fil-a.com/stories/inside-chick-fil-a/humble-beginnings-how-truett-cathys-love-for-customers-grew-from-a-coke-and-smile |
        Then Verify Image validation in Humble Beginnings page
            | imgSrc |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Stories%20Images/2016/11/Truett%20Stories/TruettCustomers.jpg?h=988&w=1020&la=en |
        Then Click on cfa-stories section and verify the new URL Launched
            | celebratingTruett |
            | https://www.chick-fil-a.com/stories/inside-chick-fil-a/celebrating-truett-on-his-100th-birthday |
    
    Scenario: Navigate to s-truett-cathy Page and verify Header Text
        Given I am on the "About s-truett-cathy" page
        And Check Header Text in s-truett-cathy page
    
    Scenario: Verify image links in s-truett-cathy Page
        Given I am on the "About s-truett-cathy" page
        And Check Header Text in s-truett-cathy page
        Then Check image links under s-truett-cathy page
            | imageLinks                                                                                                                                                                                                                        | index |
            | https://d3oz09jk0dq1kk.cloudfront.net/Images/CFACOM/About%20Images/STC%20Brand%20Restaurants/Grill_Brand%20Landing%20Page.jpg?h=566&la=en&w=850                                                                                   | 0     |
            | https://d1fd34dzzl09j.cloudfront.net/_/2022/02/Birthplace%20of%20the%20Original%20Chick%20fil%20A%20Chicken%20Sandwich%20reopens%20February%2017/The%20Dwarf%20House%20Exterior%20-%20Horizontal/1440-959.jpeg?h=959&la=en&w=1440 | 1     |
            | https://d3oz09jk0dq1kk.cloudfront.net/Images/CFACOM/About%20Images/STC%20Brand%20Restaurants/Luau_Brand%20Landing%20Page.jpg?h=390&la=en&w=693                                                                                    | 2     |
            | https://d3oz09jk0dq1kk.cloudfront.net/Images/CFACOM/About%20Images/STC%20Brand%20Restaurants/Truett%20CFA%20Landing%20Page.jpg?h=566&la=en&w=850                                                                                  | 3     |
            | https://d3oz09jk0dq1kk.cloudfront.net/Images/CFACOM/About%20Images/STC%20Brand%20Restaurants/Dwarf%20House%20Brands%20Landing%20Page.jpg?h=566&la=en&w=850                                                                        | 4     |

    Scenario: Verify URL navigation after clicking on Truett's Grill Header Text in s-truett-cathy Page
        Given I am on the "About s-truett-cathy" page
        And Check Header Text in s-truett-cathy page
        Then Check URL navigation after clicking on Truett Grill Header Text in s-truett-cathy page
            | HeadersText    | index | navURLs                                                                          |
            | Truett's Grill | 0     | https://www.chick-fil-a.com/about/s-truett-cathy-brand-restaurants/truetts-grill |
        And Verify images in Truett Grill page
            | imageLinks                                                                                                                                 | index |
            | https://d3oz09jk0dq1kk.cloudfront.net/Images/CFACOM/About%20Images/STC%20Brand%20Restaurants/Truetts%20Grill%20Brand%20History%20Image.jpg | 0     |
            | https://d3oz09jk0dq1kk.cloudfront.net/Images/CFACOM/About%20Images/STC%20Brand%20Restaurants/Truetts%20Grill%20Brand%20About%20Copy.jpg    | 1     |

    Scenario: Verify URL navigation after clicking on The Dwarf house Header Text in s-truett-cathy Page
        Given I am on the "About s-truett-cathy" page
        And Check Header Text in s-truett-cathy page
        Then Check URL navigation after clicking on The Dwarf house Header Text in s-truett-cathy page
            | HeadersText     | navURLs                                                                        |
            | The Dwarf House | https://www.chick-fil-a.com/about/s-truett-cathy-brand-restaurants/dwarf-grill |
        And Verify images in The Dwarf House page
            | imageLinks                                                                                                                                 | index |
            | https://d3oz09jk0dq1kk.cloudfront.net/Images/CFACOM/About%20Images/STC%20Brand%20Restaurants/Lemon%20Pie.jpg                               | 0     |
            | https://d3oz09jk0dq1kk.cloudfront.net/Images/CFACOM/About%20Images/STC%20Brand%20Restaurants/Truett%20Statue%20Dwarf%20House%20Callout.jpg | 1     |

    Scenario: Verify URL navigation after clicking on Truett Luau Header Text in s-truett-cathy Page
        Given I am on the "About s-truett-cathy" page
        And Check Header Text in s-truett-cathy page
        Then Check URL navigation after clicking on The Truett Luau Header Text in s-truett-cathy page
            | HeadersText     | navURLs                                                                         |
            | Truett's Luau   | https://www.chick-fil-a.com/about/s-truett-cathy-brand-restaurants/truetts-luau |
        And Verify images in The Truett Luau page
            | imageLinks                                                                                                                                 | index |
            | https://d3oz09jk0dq1kk.cloudfront.net/Images/CFACOM/About%20Images/STC%20Brand%20Restaurants/Truetts%20Luau%20About%20Image%202.jpg        | 0     |
            | https://d3oz09jk0dq1kk.cloudfront.net/Images/CFACOM/About%20Images/STC%20Brand%20Restaurants/Truetts%20Luau%20sign.jpg                     | 1     |
    
    Scenario: Verify URL navigation after clicking on Truett Chick-fil-A Header Text in s-truett-cathy Page
        Given I am on the "About s-truett-cathy" page
        And Check Header Text in s-truett-cathy page
        Then Check URL navigation after clicking on The Truett Chick-fil-A Header Text in s-truett-cathy page
            | HeadersText            | navURLs                                                                                |
            | Truett's Chick-fil-A   | https://www.chick-fil-a.com/about/s-truett-cathy-brand-restaurants/truetts-chick-fil-a |
        And Verify images in The Truett Chick-fil-A page
            | imageLinks                                                                                                                                 | index |
            | https://d3oz09jk0dq1kk.cloudfront.net/Images/CFACOM/About%20Images/STC%20Brand%20Restaurants/Truetts%20CFA%20About%20Image.jpg             | 0     |
            | https://d3oz09jk0dq1kk.cloudfront.net/Images/CFACOM/About%20Images/STC%20Brand%20Restaurants/Truetts%20CFA%20Location%20About%20Image.jpg  | 1     |

    Scenario: Verify URL navigation after clicking on Dwarf House Header Text in s-truett-cathy Page
        Given I am on the "About s-truett-cathy" page
        And Check Header Text in s-truett-cathy page
        Then Check URL navigation after clicking on Dwarf House Header Text in s-truett-cathy page
            | HeadersText | navURLs                                                                        |
            | Dwarf House | https://www.chick-fil-a.com/about/s-truett-cathy-brand-restaurants/dwarf-house |
        And Verify images in Dwarf House page
            | imageLinks                                                                                                                                                | index |
            | https://d3oz09jk0dq1kk.cloudfront.net/Images/CFACOM/About%20Images/STC%20Brand%20Restaurants/Dwarf%20House%20Brand%20Landing%20Page%20Abot%20Image.jpg    | 0     |
            | https://d3oz09jk0dq1kk.cloudfront.net/Images/CFACOM/About%20Images/STC%20Brand%20Restaurants/Dwarf%20House%20Brand%20Landing%20Page%20History%20Image.jpg | 1     |

    Scenario: Perform Go back validation and user should return to s-truett-cathy page from Dwarf House page
        Given I am on the "About s-truett-cathy" page
        And Check Header Text in s-truett-cathy page
        Then Check URL navigation after clicking on Dwarf House Header Text in s-truett-cathy page
            | HeadersText | navURLs                                                                        |
            | Dwarf House | https://www.chick-fil-a.com/about/s-truett-cathy-brand-restaurants/dwarf-house |
        And perform Go Back action
        Then user should return to s-truett-cathy page
            | homePageURL |
            | https://www.chick-fil-a.com/about/s-truett-cathy-brand-restaurants |
        
    Scenario: Verify Paragraph Content in s-truett-cathy Page
        Given I am on the "About s-truett-cathy" page
        And Check Header Text in s-truett-cathy page
        Then Check Paragraph Content in s-truett-cathy page
            | paragraphContent                                                                                                 | index |
            | Truett's Grill was originally opened in 1996 to commemorate Truett Cathy's 50th anniversary as a restauranteur   | 0     |
            | Founded by Truett Cathy in 1946, the Hapeville Dwarf House (originally named the Dwarf Grill) is the birthplace  | 1     |
            | Chick-fil-A® founder Truett Cathy once visited Hawaii and loved the experience so much he wanted to              | 2     |
            | Truett’s Chick-fil-A is a restaurant designed to honor the legacy of Chick-fil-A founder Truett Cathy            | 3     |
            | Shortly after opening the first freestanding Chick-fil-A® in 1986, founder Truett Cathy created a new restaurant | 4     |
    
    Scenario: Navigate to Who We Are Page and verify Header Text
        Given I am on the "About Who We Are" page
        And Check Header Text in Who We Are Page
    
    Scenario: Verify image links in Who We Are Page
        Given I am on the "About Who We Are" page
        And Check Header Text in Who We Are Page
        Then Check image links under Who We Are Page
            | imageLinks                                                                                                  | index |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Bio%20Images/Dan-Bio_Who-We-Are.jpg?h=299&w=398&la=en    | 0     |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Bio%20Images/Bubba-Bio_Who-We-Are3.jpg?h=299&w=398&la=en | 1     |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Bio%20Images/TrudyWhoWeAre%20(1).jpg?h=299&w=398&la=en   | 2     |
    
    Scenario: Verify Read about our commitment button Multiple URL NAvigations in Who We Are page
        Given I am on the "About Who We Are" page
        And Check Header Text in Who We Are Page
        And Click on Read about our commitment button
        Then Verify user navigated to respective page
            | navURL |
            | https://www.chick-fil-a.com/dei |
        And Click on Each link on each section and Verify the URL Launched
            | links                                   | index | navURLS                                                                           |
            | Remarkable Futures™ Scholarship program | 0     | https://www.chick-fil-a.com/remarkable-futures-scholarships                       |
            | True Inspiration Awards                 | 1     | https://www.chick-fil-a.com/true-inspiration-awards                               |
            | Chick-fil-A Shared Table™ program       | 2     | https://www.chick-fil-a.com/sharedtable                                           |
            | Chick-fil-A Impact Accelerator          | 3     | https://www.chickfilaimpactaccelerator.com/                                       |
            | give back                               | 4     | https://www.chick-fil-a.com/~/link.aspx?_id=4B5252A4F69D4CA2988A248B79EB29C2&_z=z |

    Scenario: Verify Executive Bio Page URL Navigations
        Given I am on the "About Who We Are" page
        And Check Header Text in Who We Are Page
        Then Click on Executive Bio Page link and Verify user navigated to respective URL page
            | index | navURL |
            | 0     | https://www.chick-fil-a.com/board-officers/board-of-directors/dan-cathy |
            | 1     | https://www.chick-fil-a.com/board-officers/board-of-directors/bubba-cathy |
            | 2     | https://www.chick-fil-a.com/board-officers/other-bios/trudy-cathy-white |
