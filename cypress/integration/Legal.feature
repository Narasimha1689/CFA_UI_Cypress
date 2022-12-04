@Regression
Feature: Footer section (legal) validations

    Scenario: Verify Header Text and URL validation after clicking on Do Business With Us link
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL validation after clicking on Do Business With Us link
            | urlNavigation                                   | headerText          |
            | https://www.chick-fil-a.com/do-business-with-us | Do business with us |

    Scenario: Verify Section Header and Image Link in Do Business With Us link page
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Navigate to Do Business With Us link page and verify the Header Text
            | headerText          |
            | Do business with us |
        And Check Section Header and Image Link in Do Business With Us link page
            | imageLink                                                                                                             | headerText                  | index |
            | /-/media/images/cfacom/callouts/sign-reduced-3.ashx?h=220&w=389&la=en&hash=506B0441BCA384DDEC1AD6D1AC0059B9           | Supplier and Agency Inquiry | 0     |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/DBWU%20Images/Landing-Thumbnail_Real-Estate2.jpg?h=220&w=390&la=en | Real Estate                 | 1     |
    
    Scenario: Verify Paragraph Text in Do Business With Us link page
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Navigate to Do Business With Us link page and verify the Header Text
            | headerText          |
            | Do business with us |
        And Check Paragraph Text in Do Business With Us link page
            | paragraphText                                                          | index |
            | Become a supplier for Chick-fil-A. Share what your business can offer  | 0     |
            | Learn more                                                             | 1     |
            | We're constantly scouting sites for new Chick-fil-A restaurants across | 2     |
            | Learn more                                                             | 3     |
    
    Scenario: Verify the URL Navigation after clicking on Learn More link
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Navigate to Do Business With Us link page and verify the Header Text
            | headerText          |
            | Do business with us |
        And Click on the Learn More button and Verify the URL Navigation
            | urlNavigation                                                    | headerText                  |
            | https://www.chick-fil-a.com/do-business-with-us/supplier-inquiry | Supplier and Agency Inquiry |
    
    Scenario: Verify Header Text and URL validation after clicking on Terms and Conditions of use link
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL validation after clicking on Terms and Conditions of use link
            | urlNavigation                                          | headerText |
            | https://www.chick-fil-a.com/legal#terms_and_conditions | Legal      |

    Scenario: Verify Default Opened tab after clicking on Terms and Conditions of use link
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL validation after clicking on Terms and Conditions of use link
            | urlNavigation                                          | headerText |
            | https://www.chick-fil-a.com/legal#terms_and_conditions | Legal      |
        And Check the default opened tab section under Terms and Conditions of use page
            | defaultTabOpen                              |
            | Chick-fil-A, Inc. Terms & Conditions of Use |
        Then Check the Content in default opened tab under Terms and Conditions of use page
            | defaultTabOpenSection                         |
            | Chick-fil-A, Inc. Terms and Conditions of Use |
    
    Scenario: Verify Legal options list displayed after clicking on Terms and Conditions of use link
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL validation after clicking on Terms and Conditions of use link
            | urlNavigation                                          | headerText |
            | https://www.chick-fil-a.com/legal#terms_and_conditions | Legal      |
        And Legal options list displayed after clicking on Terms and Conditions of use link
            | legalOptionsList                                         | index |
            | Franchise Legal                                          | 0     |
            | Chick-fil-A, Inc. Terms & Conditions of Use              | 1     |
            | Supply Chain                                             | 2     |
            | Chick-fil-A Privacy Policy                               | 3     |
            | Chick-fil-A One                                          | 4     |
            | Gift Cards                                               | 5     |
            | 12-Hour Campout Giveaway Official Rules                  | 6     |
            | Red Carpet Rollout Giveaway Official Rules               | 7     |
            | Your California Privacy Rights                           | 8     |
            | Accessibility                                            | 9     |
            | User Generated Content Terms of Use                      | 10    |
            | Chick-fil-A Cookie and Interest-Based Advertising Policy | 11    |
            | Promotional Offer Terms and Conditions                   | 12    |
            | Notice of Financial Incentives                           | 13    |
            | Chick-fil-A Virtual Patent Marking                       | 14    |
      
    Scenario: Verify Header Text and URL validation after clicking on Privacy Policy link
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL validation after clicking on Privacy Policy link
            | urlNavigation                                    | headerText |
            | https://www.chick-fil-a.com/legal#privacy_policy | Legal      |

    Scenario: Verify Default Opened tab after clicking on Privacy Policy link
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL validation after clicking on Privacy Policy link
            | urlNavigation                                    | headerText |
            | https://www.chick-fil-a.com/legal#privacy_policy | Legal      |
        And Check the default opened tab section under Privacy Policy page
            | defaultTabOpen             |
            | Chick-fil-A Privacy Policy |
        Then Check the Content in default opened tab under Privacy Policy page
            | defaultTabOpenSection      |
            | Chick-fil-A Privacy Policy |

    Scenario: Verify Legal options list displayed after clicking on Privacy Policy link
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL validation after clicking on  Pricacy Policy link
            | urlNavigation                                    | headerText |
            | https://www.chick-fil-a.com/legal#privacy_policy | Legal      |
        And Legal options list displayed after clicking on Privacy Policy link
            | legalOptionsList                                         | index |
            | Franchise Legal                                          | 0     |
            | Chick-fil-A, Inc. Terms & Conditions of Use              | 1     |
            | Supply Chain                                             | 2     |
            | Chick-fil-A Privacy Policy                               | 3     |
            | Chick-fil-A One                                          | 4     |
            | Gift Cards                                               | 5     |
            | 12-Hour Campout Giveaway Official Rules                  | 6     |
            | Red Carpet Rollout Giveaway Official Rules               | 7     |
            | Your California Privacy Rights                           | 8     |
            | Accessibility                                            | 9     |
            | User Generated Content Terms of Use                      | 10    |
            | Chick-fil-A Cookie and Interest-Based Advertising Policy | 11    |
            | Promotional Offer Terms and Conditions                   | 12    |
            | Notice of Financial Incentives                           | 13    |
            | Chick-fil-A Virtual Patent Marking                       | 14    |
    
    Scenario: Verify Header Text and URL validation after clicking on California Privacy Notice link
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Verify and Check Header Text and URL validation after clicking on California Privacy Notice link
            | urlNavigation                                                    | headerText |
            | https://www.chick-fil-a.com/legal#your_california_privacy_rights | Legal      |
    
    Scenario: Verify Default Opened tab after clicking on California Privacy Notice link
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Verify and Check Header Text and URL validation after clicking on California Privacy Notice link
            | urlNavigation                                                    | headerText |
            | https://www.chick-fil-a.com/legal#your_california_privacy_rights | Legal      |
        And Check the default opened tab section under California Privacy Notice page
            | defaultTabOpen                 |
            | Your California Privacy Rights |
        Then Check the Content in default opened tab under California Privacy Notice page
            | defaultTabOpenSection          |
            | Your California Privacy Rights |

    Scenario: Verify Legal options list displayed after clicking on California Privacy Notice link
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Verify and Check Header Text and URL validation after clicking on California Privacy Notice link
            | urlNavigation                                                    | headerText |
            | https://www.chick-fil-a.com/legal#your_california_privacy_rights | Legal      |
        And Legal options list displayed after clicking on California Privacy Notice link
            | legalOptionsList                                         | index |
            | Franchise Legal                                          | 0     |
            | Chick-fil-A, Inc. Terms & Conditions of Use              | 1     |
            | Supply Chain                                             | 2     |
            | Chick-fil-A Privacy Policy                               | 3     |
            | Chick-fil-A One                                          | 4     |
            | Gift Cards                                               | 5     |
            | 12-Hour Campout Giveaway Official Rules                  | 6     |
            | Red Carpet Rollout Giveaway Official Rules               | 7     |
            | Your California Privacy Rights                           | 8     |
            | Accessibility                                            | 9     |
            | User Generated Content Terms of Use                      | 10    |
            | Chick-fil-A Cookie and Interest-Based Advertising Policy | 11    |
            | Promotional Offer Terms and Conditions                   | 12    |
            | Notice of Financial Incentives                           | 13    |
            | Chick-fil-A Virtual Patent Marking                       | 14    |
    
    Scenario: Verify Header Text and URL validation after clicking on Accessibility link
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Verify and Check Header Text and URL validation after clicking on Accessibility link
            | urlNavigation                                   | headerText |
            | https://www.chick-fil-a.com/legal#accessibility | Legal      |
    
    Scenario: Verify Default Opened tab after clicking on Accessibility link
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Verify and Check Header Text and URL validation after clicking on Accessibility link
            | urlNavigation                                   | headerText |
            | https://www.chick-fil-a.com/legal#accessibility | Legal      |
        And Check the default opened tab section under Accessibility page
            | defaultTabOpen |
            | Accessibility  |
        Then Check the Content in default opened tab under Accessibility page
            | defaultTabOpenSection |
            | Accessibility         |
            
    Scenario: Verify Legal options list displayed after clicking on California Privacy Notice link
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Verify and Check Header Text and URL validation after clicking on Accessibility link
            | urlNavigation                                   | headerText |
            | https://www.chick-fil-a.com/legal#accessibility | Legal      |
        And Legal options list displayed after clicking on Accessibility link
            | legalOptionsList                                         | index |
            | Franchise Legal                                          | 0     |
            | Chick-fil-A, Inc. Terms & Conditions of Use              | 1     |
            | Supply Chain                                             | 2     |
            | Chick-fil-A Privacy Policy                               | 3     |
            | Chick-fil-A One                                          | 4     |
            | Gift Cards                                               | 5     |
            | 12-Hour Campout Giveaway Official Rules                  | 6     |
            | Red Carpet Rollout Giveaway Official Rules               | 7     |
            | Your California Privacy Rights                           | 8     |
            | Accessibility                                            | 9     |
            | User Generated Content Terms of Use                      | 10    |
            | Chick-fil-A Cookie and Interest-Based Advertising Policy | 11    |
            | Promotional Offer Terms and Conditions                   | 12    |
            | Notice of Financial Incentives                           | 13    |
            | Chick-fil-A Virtual Patent Marking                       | 14    |
    
    Scenario: Verify Header Text and URL validation after clicking on Legal link
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Verify and Check Header Text and URL validation after clicking on Legal link
            | urlNavigation                     | headerText |
            | https://www.chick-fil-a.com/legal | Legal      |
           
    Scenario: Verify Legal options list displayed after clicking on Legal link
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Verify and Check Header Text and URL validation after clicking on Legal link
            | urlNavigation                     | headerText |
            | https://www.chick-fil-a.com/legal | Legal      |
        And Legal options list displayed after clicking on Legal link
            | legalOptionsList                                         | index |
            | Franchise Legal                                          | 0     |
            | Chick-fil-A, Inc. Terms & Conditions of Use              | 1     |
            | Supply Chain                                             | 2     |
            | Chick-fil-A Privacy Policy                               | 3     |
            | Chick-fil-A One                                          | 4     |
            | Gift Cards                                               | 5     |
            | 12-Hour Campout Giveaway Official Rules                  | 6     |
            | Red Carpet Rollout Giveaway Official Rules               | 7     |
            | Your California Privacy Rights                           | 8     |
            | Accessibility                                            | 9     |
            | User Generated Content Terms of Use                      | 10    |
            | Chick-fil-A Cookie and Interest-Based Advertising Policy | 11    |
            | Promotional Offer Terms and Conditions                   | 12    |
            | Notice of Financial Incentives                           | 13    |
            | Chick-fil-A Virtual Patent Marking                       | 14    |
    
    Scenario: Verify Header Text and URL validation after clicking on Cookie and Internet-Based Advertising Policy link
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Verify and Check Header Text and URL validation after clicking on Cookie and Internet-Based Advertising Policy link
            | urlNavigation                                                                              | headerText |
            | https://www.chick-fil-a.com/legal#chick-fil-a_cookie_and_interest-based_advertising_policy | Legal      |
         
    Scenario: Verify Legal options list displayed after clicking on Cookie and Internet-Based Advertising Policy link
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Verify and Check Header Text and URL validation after clicking on Cookie and Internet-Based Advertising Policy link
            | urlNavigation                                                                              | headerText |
            | https://www.chick-fil-a.com/legal#chick-fil-a_cookie_and_interest-based_advertising_policy | Legal      |
        And Legal options list displayed after clicking on Cookie and Internet-Based Advertising Policy link
            | legalOptionsList                                         | index |
            | Franchise Legal                                          | 0     |
            | Chick-fil-A, Inc. Terms & Conditions of Use              | 1     |
            | Supply Chain                                             | 2     |
            | Chick-fil-A Privacy Policy                               | 3     |
            | Chick-fil-A One                                          | 4     |
            | Gift Cards                                               | 5     |
            | 12-Hour Campout Giveaway Official Rules                  | 6     |
            | Red Carpet Rollout Giveaway Official Rules               | 7     |
            | Your California Privacy Rights                           | 8     |
            | Accessibility                                            | 9     |
            | User Generated Content Terms of Use                      | 10    |
            | Chick-fil-A Cookie and Interest-Based Advertising Policy | 11    |
            | Promotional Offer Terms and Conditions                   | 12    |
            | Notice of Financial Incentives                           | 13    |
            | Chick-fil-A Virtual Patent Marking                       | 14    |
    
    Scenario: Verify Default Opened tab after clicking on Cookie and Internet-Based Advertising Policy link
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Verify and Check Header Text and URL validation after clicking on Cookie and Internet-Based Advertising Policy link
            | urlNavigation                                                                              | headerText |
            | https://www.chick-fil-a.com/legal#chick-fil-a_cookie_and_interest-based_advertising_policy | Legal      |
        And Check the default opened tab section under Cookie and Internet-Based Advertising Policy page
            | defaultTabOpen |
            | Chick-fil-A Cookie and Interest-Based Advertising Policy  |
        Then Check the Content in default opened tab under Cookie and Internet-Based Advertising Policy page
            | defaultTabOpenSection |
            | Chick-fil-A Cookie and Interest-Based Advertising Policy         |
    
    Scenario: Verify Header Text and URL validation after clicking on Locations Listing link
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Verify and Check Header Text and URL validation after clicking on Locations Listing link
            | urlNavigation                                | headerText        |
            | https://www.chick-fil-a.com/locations/browse | Location listings |
    
    Scenario: Verify the states list in Locations Listing page
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Verify and Check Header Text and URL validation after clicking on Locations Listing link
            | urlNavigation                                | headerText        |
            | https://www.chick-fil-a.com/locations/browse | Location listings |
        And Check the states list displayed in Locations Listing page
            | statesList                           | index |
            | Alabama (AL)                         | 0     |
            | Arizona (AZ)                         | 1     |
            | Arkansas (AR)                        | 2     |
            | California (CA)                      | 3     |
            | Colorado (CO)                        | 4     |
            | Connecticut (CT)                     | 5     |
            | Delaware (DE)                        | 6     |
            | Florida (FL)                         | 7     |
            | Georgia (GA)                         | 8     |
            | Idaho (ID)                           | 9     |
            | Illinois (IL)                        | 10    |
            | Indiana (IN)                         | 11    |
            | Iowa (IA)                            | 12    |
            | Kansas (KS)                          | 13    |
            | Kentucky (KY)                        | 14    |
            | Louisiana (LA)                       | 15    |
            | Maine (ME)                           | 16    |
            | Maryland (MD)                        | 17    |
            | Massachusetts (MA)                   | 18    |
            | Michigan (MI)                        | 19    |
            | Minnesota (MN)                       | 20    |
            | Mississippi (MS)                     | 21    |
            | Missouri (MO)                        | 22    |
            | Montana (MT)                         | 23    |
            | Nebraska (NE)                        | 24    |
            | Nevada (NV)                          | 25    |
            | New Hampshire (NH)                   | 26    |
            | New Jersey (NJ)                      | 27    |
            | New Mexico (NM)                      | 28    |
            | New York (NY)                        | 29    |
            | North Carolina (NC)                  | 30    |
            | North Dakota (ND)                    | 31    |
            | Ohio (OH)                            | 32    |
            | Oklahoma (OK)                        | 33    |
            | Oregon (OR)                          | 34    |
            | Pennsylvania (PA)                    | 35    |
            | Rhode Island (RI)                    | 36    |
            | South Carolina (SC)                  | 37    |
            | South Dakota (SD)                    | 38    |
            | Tennessee (TN)                       | 39    |
            | Texas (TX)                           | 40    |
            | Utah (UT)                            | 41    |
            | Virginia (VA)                        | 42    |
            | WASHINGTON DISTRICT OF COLUMBIA (DC) | 43    |
            | Washington (WA)                      | 44    |
            | West Virginia (WV)                   | 45    |
            | Wisconsin (WI)                       | 46    |
            | Wyoming (WY)                         | 47    |
    
    Scenario: Click any of the state in Locations Listing and verify the Address location
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Verify and Check Header Text and URL validation after clicking on Locations Listing link
            | urlNavigation                                | headerText        |
            | https://www.chick-fil-a.com/locations/browse | Location listings |
        And Click on the State selected in Locations Listing page
            | statesList                           | index |
            | Alabama (AL)                         | 0     |
        Then Verify the URL Navigation and check for Address location
            | addressLoc           | urlNavigation                                   | headerText        | 
            | Birmingham, AL 35205 | https://www.chick-fil-a.com/locations/browse/al | Location listings |
    
    Scenario: Click on any of the location in Locations Listing and verify the Address
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Verify and Check Header Text and URL validation after clicking on Locations Listing link
            | urlNavigation                                | headerText        |
            | https://www.chick-fil-a.com/locations/browse | Location listings |
        And Click on the State selected in Locations Listing page
            | statesList                           | index |
            | Alabama (AL)                         | 0     |
        Then Verify the URL Navigation and check for Address location
            | addressLoc           | urlNavigation                                   | headerText        | 
            | Birmingham, AL 35205 | https://www.chick-fil-a.com/locations/browse/al | Location listings |
        And Click on the location and Verify URL Navigation and the Address
            | addressLoc           | urlNavigation                                             | headerText        | 
            | Birmingham, AL 35205 | https://www.chick-fil-a.com/locations/al/5-points-in-line | 5 Points In-Line |
    