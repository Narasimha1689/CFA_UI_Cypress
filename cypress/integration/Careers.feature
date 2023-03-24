@Regression
Feature: Careers menu
    
    # Scenario: Verify Careers page Header Text
    #     Given I am on the ".Com homepage" page
    #     When clicked on the Careers Menu
    #     Then perform Careers Page Header Text Validation
    @stageFail
    Scenario: Verify Navigation Tabs and their Header Text in Careers page
        Given I am on the ".Com homepage" page
        When clicked on the Careers Menu
        And Check for "At Chick-fil-A..." text header
        And Click on Navigation Tabs and verify the HeaderText

            | HeaderText                     | 
            | Restaurants                    |
            | Corporate                      |
            | Franchising                    |
            | Leadership Development Program |
            | Licensing                      |
            | Chick-fil-A Supply®            |
            | Bay Center Foods               |

    # Scenario: Verify Navigation Tabs Paragrapg Content validations
    #     Given I am on the ".Com homepage" page
    #     When clicked on the Careers Menu
    #     And Check for "At Chick-fil-A..." text header
    #     And check for Navigation tabs Paragraph Content
        
    #         | navigationTabs      | navParagraphContent                                      | 
    #         | Restaurants         | Most Chick-fil-A restaurant businesses are locally owned |      
    #         | Corporate           | Our headquarters, known as the Support Center within the |                      
    #         | Franchising         | Six days a week, in neighborhoods all across the country |                    
    #         | LDP                 | The Chick-fil-A® Leadership Development Program is the   |
    #         | Licensing           | Learn everything you need to know about opening a        |                    
    #         | Chick-fil-A Supply  | Chick-fil-A Supply®, a wholly owned subsidiary of Chick  |          
    #         | Bay Center Foods    | Bay Center Foods, LLC, a wholly owned subsidiary of      |

    # Scenario: Restaurants Navigation tab Image Check
    #     Given I am on the ".Com homepage" page
    #     When clicked on the Careers Menu
    #     And Check for "At Chick-fil-A..." text header
    #     And Click on Restaurants Navigation Tab
    #     Then Verify the Image displayed
    #         | imageLink |
    #         | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Careers%20Images/restaurants-tab-new-image.png?h=633&w=825&la=en |
    @stageFail
    Scenario: Restaurants URL check after Learn More button Click
        Given I am on the ".Com homepage" page
        When clicked on the Careers Menu
        And Check for "At Chick-fil-A..." text header
        # And Click on Restaurants Navigation Tab
        And Click on Learn More button
        Then Verify the Restaurant URL launched
            | RestaurantsURL |
            | /careers/team-member-employment |
    @stageFail
    Scenario: Corporate URL check after Learn More button click
        Given I am on the ".Com homepage" page
        When clicked on the Careers Menu
        And Check for "At Chick-fil-A..." text header
        # And Click on Corporate Navigation Tab
        And Click on Learn More button in Corporate Navigation Tab
        Then Verify the Corporate URL launched
            | CorporateURL |
            | /careers/corporate |
        Then Verify the header text in Corporate page
    
    # Scenario: Corporate Navigation tab Image Check
    #     Given I am on the ".Com homepage" page
    #     When clicked on the Careers Menu
    #     And Check for "At Chick-fil-A..." text header
    #     And Click on Corporate Navigation Tab
    #     Then Verify the Image displayed on Corporate Navigation Tab
    #         | imageLink |
    #         | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Careers%20Images/Corporate/Header-Corporate_Careers_960.jpg?h=479&w=960&la=en |
   
    # Scenario: Franchising Tab Image Check Validation
    #     Given I am on the ".Com homepage" page
    #     When clicked on the Careers Menu
    #     And Check for "At Chick-fil-A..." text header
    #     And Click on Franchising Navigation Tab
    #     Then Verify the Image displayed on Franchising Navigation Tab
    #         | imageLink |
    #         | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Careers%20Images/Franchise/Franchise-banner_Careers-Franchise_960.jpg?h=474&w=960&la=en |
    @stageFail
    Scenario: Franchising URL check after clicking on Load More button
        Given I am on the ".Com homepage" page
        When clicked on the Careers Menu
        And Check for "At Chick-fil-A..." text header
        # And Click on Franchising Navigation Tab
        And Click on Learn More button in Franchising Navigation Tab
        Then Verify the Franchising URL launched
            | FranchisingURL |
            | /franchise |
        And Verify the header text in Franchising page
    @stageFail
    Scenario: Verify User Navigation from LDP Page to Glance Page
        Given I am on the ".Com homepage" page
        When clicked on the Careers Menu
        And Check for "At Chick-fil-A..." text header
        # And Click on LDP Navigation Tab
        And Click on Learn More button in LDP Navigation Tab
        Then Verify the LDP URL launched
            | LDPURL |
            | /leadership-development-program |
        And Verify the header text in LDP page
        And Click on Learn More link in LDP screen
        Then Verify the URL launched and element validation in glance page
            | glancePageURL |
            | /leadership-development-program/at-a-glance |
        And Verify the images count on glance screen
        
    # Scenario: Licensing Navigation tab Image Check
    #     Given I am on the ".Com homepage" page
    #     When clicked on the Careers Menu
    #     And Check for "At Chick-fil-A..." text header
    #     And Click on Licensing Navigation Tab        
    #     Then Verify the Image displayed on Licensing Navigation Tab
    #         | imageLink |
    #         | https://d3oz09jk0dq1kk.cloudfront.net/Images/CFACOM/Careers%20Images/FC-181004-%20254%20-%20Illinois%20Chicago.png?h=479&w=960&la=en |
    @stageFail
    Scenario: Verify Licensing URL launched after clicking on Learn More button
        Given I am on the ".Com homepage" page
        When clicked on the Careers Menu
        And Check for "At Chick-fil-A..." text header
        # And Click on Licensing Navigation Tab
        And Click on Learn More button in Licensing Navigation Tab
        And Verify the Licensing URL launched
            | LicensingURL |
            | /franchising/licensing |
        Then Verify the header text in Licensing page
    @stageFail
    Scenario: Verify User navigation to Licensing Application screen
        Given I am on the ".Com homepage" page
        When clicked on the Careers Menu
        And Check for "At Chick-fil-A..." text header
        # And Click on Licensing Navigation Tab
        And Click on Learn More button in Licensing Navigation Tab
        And Verify the Licensing URL launched
            | LicensingURL |
            | /franchising/licensing |
        And Verify the header text in Licensing page
        And Click on Apply now link in Licensing screen
        Then Verify the Licensing Application URL launched and element validation
            | applyNowPageURL |
            | /franchising/licensing/licensing-application |
    
    # Scenario: Chick-fil-A supply tab Image Check Validation
    #     Given I am on the ".Com homepage" page
    #     When clicked on the Careers Menu
    #     And Check for "At Chick-fil-A..." text header
    #     And Click on Chick-fil-A supply Navigation Tab
    #     Then Verify the Image displayed on Chick-fil-A supply Navigation Tab
    #         | imageLink |
    #         | https://d3oz09jk0dq1kk.cloudfront.net/Images/CFACOM/Careers%20Images/Supply/CFA%20Supply%20Tab%20Image_short.jpg?h=474&w=960&la=en |
    @stageFail
    Scenario: Chick-fil-A supply Our Growth URL validation
        Given I am on the ".Com homepage" page
        When clicked on the Careers Menu
        And Check for "At Chick-fil-A..." text header
        # And Click on Chick-fil-A supply Navigation Tab
        And Click on Learn More button in Chick-fil-A supply Navigation Tab
        Then Verify the Chick-fil-A supply URL launched
            | chickfilURL |
            | https://www.cfa-supply.com/ |
        And Verify the header text in Chick-fil-A supply page
        Then Click on Our Growth button and verify the url launched
            | ourGrowthURL |
            | https://www.cfa-supply.com/our-growth |
    @stageFail
    Scenario: Verify Baby Center Foods Navigation tab Functional flow
        Given I am on the ".Com homepage" page
        When clicked on the Careers Menu
        And Check for "At Chick-fil-A..." text header
        # And Click on Baby Center Foods Navigation Tab
        # And Verify the Image displayed on Baby Center Foods supply Navigation Tab
        #     | imageLink |
        #     | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Careers%20Images/Bay%20Center%20Facility.jpg?h=479&w=957&la=en |
        And Click on Learn More button in Baby Center Foods Navigation Tab
        And Verify the Baby Center Foods URL launched
            | babyCenterURL |
            | https://careers-baycenter.icims.com/jobs/intro?hashed=-435775293&mobile=false&width=929&height=500&bga=true&needsRedirect=false&jan1offset=-300&jun1offset=-240 |
        And Verify the header text in aby Center Foods page
    @stageFail
    Scenario: Verify User navigation from Licensing to Franchise page
        Given I am on the ".Com homepage" page
        When clicked on the Careers Menu
        And Check for "At Chick-fil-A..." text header
        # And Click on Licensing Navigation Tab
        And Click on Learn More button in Licensing Navigation Tab
        And Verify the Licensing URL launched
            | LicensingURL |
            | /franchising/licensing |
        And Verify the header text in Licensing page
        And Click on Apply now link in Licensing screen
        And Verify the URL launched and element validation
            | applyNowPageURL |
            | /franchising/licensing/licensing-application |
        And Click on franchise opportunities link
        Then verify user navigated to franchise screen URL
            | franchiseScreenURL |
            | /franchise |
        And Verify and play the video
        Then Verify the images count on franchise screen
    @stageFail
    Scenario: Chick-fil-A supply Our Service URL validation
        Given I am on the ".Com homepage" page
        When clicked on the Careers Menu
        And Check for "At Chick-fil-A..." text header
        # And Click on Chick-fil-A supply Navigation Tab
        And Click on Learn More button in Chick-fil-A supply Navigation Tab
        Then Verify the Chick-fil-A supply URL launched
            | chickfilURL |
            | https://www.cfa-supply.com/ |
        And Verify the header text in Chick-fil-A supply page
        Then Click on Our Service button and verify the url launched
            | ourServiceURL |
            | https://www.cfa-supply.com/our-service |
    @stageFail
    Scenario: Verify Employee Opportunities Page
        Given I am on the ".Com homepage" page
        When clicked on the Careers Menu
        And Check for "At Chick-fil-A..." text header
        # And Click on Restaurants Navigation Tab
        And Click on Learn More button
        Then Verify the Restaurant URL launched
            | RestaurantsURL |
            | /careers/team-member-employment |
        And Click on Employee opportunities link
        Then User should navigate to Employement Opportunities page
            | EmploymentOpportunityURL |
            | /careers/team-member-employment/employment-opportunities |
        And Verify the "Join Us" header in the Employment Opportunity Page
    
    # Scenario: LDP tab Image Check Validation
    #     Given I am on the ".Com homepage" page
    #     When clicked on the Careers Menu
    #     And Check for "At Chick-fil-A..." text header
    #     And Click on LDP Navigation Tab
    #     Then Verify the Image displayed on LDP Navigation Tab
    #         | imageLink |
    #         | https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Careers%20Images/ldp-careers-tabs.jpg?h=550&w=825&la=en |
    @stageFail
    Scenario: Chick-fil-A supply Our Team URL validation
        Given I am on the ".Com homepage" page
        When clicked on the Careers Menu
        And Check for "At Chick-fil-A..." text header
        # And Click on Chick-fil-A supply Navigation Tab
        And Click on Learn More button in Chick-fil-A supply Navigation Tab
        And Verify the Chick-fil-A supply URL launched
            | chickfilURL |
            | https://www.cfa-supply.com/ |
        And Verify the header text in Chick-fil-A supply page
        And Click on Our Team button and verify the url launched
            | ourTeamURL |
            | https://www.cfa-supply.com/our-team |
    @stageFail    
    Scenario: LDP URL check after clicking on LoadMore button
        Given I am on the ".Com homepage" page
        When clicked on the Careers Menu
        And Check for "At Chick-fil-A..." text header
        # And Click on LDP Navigation Tab
        And Click on Learn More button in LDP Navigation Tab
        Then Verify the LDP URL launched
            | LDPURL |
            | /leadership-development-program |
    @stageFail  
    Scenario: Chick-fil-A supply URL Check after clicking on LearnMore button
        Given I am on the ".Com homepage" page
        When clicked on the Careers Menu
        And Check for "At Chick-fil-A..." text header
        # And Click on Chick-fil-A supply Navigation Tab
        And Click on Learn More button in Chick-fil-A supply Navigation Tab
        Then Verify the Chick-fil-A supply URL launched
            | chickfilURL |
            | https://www.cfa-supply.com/ |
        And Verify the header text in Chick-fil-A supply page
