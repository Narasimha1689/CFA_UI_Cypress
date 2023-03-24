@Regression
Feature: Chick-fil-A One Menu Validations
    @stageFail
    Scenario: Navigate to Chick-fil-A One page and Check Header Text and Image
        Given I am on the ".Com homepage" page
        When Mousehover on the Chick-fil-A Menu and click it
        And Verify User landed in Chick-fil-A page by Header check and Image check
            | HeaderText                   | ParagraphText                   | ImageLink |
            | Earn points with every order | A little thing to say thank you | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/One/one-burger.png?h=468&w=644&la=en |

    Scenario: Perform 1,2,3 Header Text and Paragraph validations
        Given I am on the ".Com homepage" page
        When Mousehover on the Chick-fil-A Menu and click it
        And check 123 sections Header Text and Paragraph Text in Chick-fil-A One page
            | HeaderText      | ParagraphText                                 | index |
            | Earn points     | Receive points with every qualifying purchase | 0     |
            | Receive rewards | Use points to redeem available rewards        | 1     |
            | Redeem benefits | Receive additional benefits as you reach new  | 2     |
    @stageFail
    Scenario: Click on Ready To Join links and verify the URLs Navigations
        Given I am on the ".Com homepage" page
        When Mousehover on the Chick-fil-A Menu and click it
        And check URL navigations after clicking on Ready To Join links in Chick-fil-A One page
            | readyToJoinLinks          | urlValidation                                                    | index |
            | Terms & Conditions of Use | /legal#terms_and_conditions           | 0     |
            | Privacy Policy            | /legal#privacy_policy                 | 1     |
            | California Privacy Notice | /legal#your_california_privacy_rights | 2     |
    
    Scenario: Verify Paragraph validations on Chick-fil-A One Member link section
        Given I am on the ".Com homepage" page
        When Mousehover on the Chick-fil-A Menu and click it
        And Click on the Chick-fil-A One Member link in Chick-fil-A One page
            | chickfilA_MemberLink | index |
            | Member               | 0     |
        Then Check Paragraph validations on Chick-fil-A One Member link section          
            | paragraphText                                  | index |
            | Earn 10 points per dollar to use towards       | 0     |
            | Use your points to redeem available rewards    | 1     |
            | Receive rewards from your local Chick-fil-A    | 2     |
            | Receive a birthday reward from Chick-fil-A     | 3     |
            | Participate in bonus points challenges         | 4     |
            | First to know about new menu items and insider | 5     |
    
    Scenario: Perform Paragraph validations on Chick-fil-A One Silver Member link section
        Given I am on the ".Com homepage" page
        When Mousehover on the Chick-fil-A Menu and click it
        And Click on the Chick-fil-A One Silver Member link in Chick-fil-A One page
            | chickfilA_SilverMemberLink |
            | Silver Member              |
        Then Check Paragraph validations on Chick-fil-A One Silver Member link section          
            | paragraphText                                  | index |
            | Earn 11 points per dollar to use towards       | 0     |
            | Use your points to give rewards to friends     | 1     |
            | Use your points to redeem available rewards    | 2     |
            | Receive rewards from your local Chick-fil-A    | 3     |
            | Receive a birthday reward from Chick-fil-A     | 4     |
            | Participate in bonus points challenges         | 5     |
            | First to know about new menu items and insider | 6     |
    @stageFail
    Scenario: Perform Paragraph validations on Chick-fil-A One Red Member link section
        Given I am on the ".Com homepage" page
        When Mousehover on the Chick-fil-A Menu and click it
        And Click on the Chick-fil-A One Red Member link in Chick-fil-A One page
            | chickfilA_RedMemberLink |
            | Red Member              |
        Then Check Paragraph validations on Chick-fil-A One Red Member link section          
            | paragraphText                                  | index |
            | Earn 12 points per dollar to use towards       | 0     |
            | Use your points to give rewards to friends     | 1     |
            | Access Backstage Tours at the Chick-fil-A      | 2     |
            | Use your points to redeem available rewards    | 3     |
            | Receive rewards from your local Chick-fil-A    | 4     |
            | Receive a birthday reward from Chick-fil-A     | 5     |
            | Participate in bonus points challenges         | 6     |
            | First to know about new menu items and insider | 7     |
            | Unlock rewards exclusive to Red Members        | 8     |
    @stageFail
    Scenario: Perform Paragraph validations on Chick-fil-A One Signature Member link section
        Given I am on the ".Com homepage" page
        When Mousehover on the Chick-fil-A Menu and click it
        And Click on the Chick-fil-A One Signature Member link in Chick-fil-A One page
            | chickfilA_SignatureMemberLink |
            | Signature Member        |
        Then Check Paragraph validations on Chick-fil-A One Signature Member link section          
            | paragraphText                                  | index |
            | Earn 13 points per dollar to use towards       | 0     |
            | Access to unique experiences                   | 1     |
            | Access Backstage Tours at the Chick-fil-A Home | 2     |
            | Use your points to give rewards to friends and | 3     |
            | Use your points to redeem available rewards    | 4     |
            | Receive rewards from your local Chick-fil-A    | 5     |
            | Receive a birthday reward from Chick-fil-A     | 6     |
            | Participate in bonus points challenges         | 7     |
            | First to know about new menu items and insider | 8     |
            | Unlock rewards exclusive to Signature Members  | 9     |
    @stageFail
    Scenario: Perform Image link validations on Chick-fil-A One each Members section
        Given I am on the ".Com homepage" page
        When Mousehover on the Chick-fil-A Menu and click it
        And Check each Image link validation on Chick-fil-A One Members section in Chick-fil-A One page        
            | ImageLink                                                                                                                          | index |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Tier/New%20Icons/1%20One%20Header%20Selected%20Filled.png?h=47&w=48&la=en       | 0     |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Tier/New%20Icons/3%20Silver%20Header%20selected%20filled.png?h=47&w=40&la=en    | 1     |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Tier/New%20Icons/5%20Red%20Header%20Selected%20Filled.png?h=47&w=28&la=en       | 2     |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Tier/New%20Icons/7%20Signature%20Header%20Selected%20Filled.png?h=47&w=47&la=en | 3     |
    @stageFail
    Scenario: Click on Here link and verify functional flow in Chick-fil-A One page
        Given I am on the ".Com homepage" page
        When Mousehover on the Chick-fil-A Menu and click it
        And click on Here link and verify functional flow
        Then Verify the URL Navigations  
            | urlNavigation                                                        |
            | /customer-support#chick-fil-a_one_account |
        And Verify the Customer Support quick images links
            | ImageLink                                                                                                                 | index |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Customer%20Support/CFA_Icon_SecureDevice_Red_RGB.png?h=127&w=128&la=en | 0     |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Customer%20Support/MobileOrderRefund5.png?h=146&w=128&la=en            | 1     |
            | https://d1fd34dzzl09j.cloudfront.net/2022/09/Quick%20Links%20Image/CFA_Icon_Settings_Red_PMS%20(1).png?h=238&w=216&la=en  | 2     |
            | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Customer%20Support/money-icon2.png?h=94&w=126&la=en                    | 3     |

    Scenario: Click on Get Started Button and verify the URL navigation
        Given I am on the ".Com homepage" page
        When Mousehover on the Chick-fil-A Menu and click it
        And Click on Get Started button in Chick-fil-A One Page
        Then Check the URL Navigation after clicking on Get Started button
            | urlNavigation   |
            | chick-fil-a.com |
        