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
            | https://www.cfaapparel.com |
    
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
        Then Click on the first ques and verify the URL Navigation
            | firstQuesURLNavigation |
            | https://www.chick-fil-a.com/customer-support/chick-fil-a-one-membership-program/points-and-rewards/how-do-i-receive-points-towards-rewards-of-my-choice |
    
    Scenario: Verify Each section Image and Paragraph in Suspicious Activity Row
        Given I am on the ".Com homepage" page
        And Verify Footer section is visible or not
        Then Check Header Text and URL Navigation by clicking on Customer Support link in Footer Section
            | urlNavigation                                | headerText       |
            | https://www.chick-fil-a.com/customer-support | Customer Support |
        And Check Each section Image and Paragraph in Suspicious Activity Row
            | imageLink                                                                                                                 | paragraphText        |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Customer%20Support/CFA_Icon_SecureDevice_Red_RGB.png?h=127&w=128&la=en | Suspicious Activity  |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Customer%20Support/MobileOrderRefund5.png?h=146&w=128&la=en            | Digital Order Refund |
            | https://d1fd34dzzl09j.cloudfront.net/2022/09/Quick%20Links%20Image/CFA_Icon_Settings_Red_PMS%20(1).png?h=238&w=216&la=en  | Reset Password       |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Customer%20Support/money-icon2.png?h=94&w=126&la=en                    | Missed Transactions  |
    
    @focus
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

