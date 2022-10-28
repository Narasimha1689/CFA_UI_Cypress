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

        
        
    



