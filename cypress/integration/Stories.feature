@Regression
Feature: Stories

    Background: Stories page
        Given   I am on the "Stories" page
    @stageFail
    Scenario: Click on the sub sections of stories and check the navigation
        When click on sub section and check the category tagline
            | section            | element        | tagline        |
            | Food               | food-id        | Food           |
            | LifeStyle          | lifestyle-id   | Lifestyle      |
            | Inside Chick-fil-A | cfa-stories-id | Chick-fil-A    |
            | News               | news-id        | The Press Room |
            
    Scenario: Check the slide content on the Main stories page
        Then Check the slide content on Main Stories page
    @stageFail
    Scenario: click on Load More button on stories page and check for new stories loaded
        When I click on the Load More button
        Then click on the one of the new stories
        # And Verify Facebook share button is visble when scrolled
    
    Scenario: click on Load More button on stories page and check for Load more button again
        When I click on the Load More button
        Then check for load more button showing again and click
    
    Scenario: Check for Lets be friends and Social Media Icons on Stories page
        Then check for Lets be friends and Social Media Icons
    @stageFail
    Scenario: Open a new story and check for related stories
        Then I Navigate to First story on favourite stories
        And Check for related stories and open any related story
    @stageFail   
    Scenario: Verify stories links in Food section and check if they can be shared in social media
        When I click on the "Food" section
        Then I Navigate to First story on favourite stories
    # And Verify Facebook share button is visble when scrolled
    @stageFail
    Scenario: check Lifesytle section
        When I click on the "Lifesytle" section
        Then I Navigate to First story on favourite stories
        And Verify Facebook share button is visble when scrolled
    @stageFail
    Scenario: check inside-chick-fil-a section
        When I click on the "inside-chick-fil-a" section
        Then I Navigate to First story on favourite stories
        And Verify Facebook share button is visble when scrolled
    @stageFail
    Scenario: check News section
        When I click on the "News" section


