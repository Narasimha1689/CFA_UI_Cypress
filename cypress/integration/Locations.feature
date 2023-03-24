@Regression
Feature: Locations

  Background: Chick fil A homepage
    Given I am on the ".Com homepage" page
  
  # @focus
  # Scenario: Check for Location redirects
  #   When I Open locations url
  @stageFail
  Scenario: Grand opening future location
    When I navigate to a location of future status
    Then I see all the future location's details
  @stageFail
  Scenario: No Results - No Matches Search
    When I search for "99501"
    Then an error Image is displayed
  @stageFail
  Scenario Outline: Can view updated location page
    When I search for "<location>"
    Then I see "<location>" page

    Examples:
      | location                |
      | truetts-grill-griffin   |
      | forest-park-dwarf-house |
  @stageFail
  Scenario Outline: Can view location menu
    When  I search for "<location>"
    And  I click on the menu of location "<location>"
    Then I see the menu for that "<location>"

    Examples:
      | location              |
      | gresham-village       |
      | village-district      |


  # Scenario: Check for available delivery options
  #   When I search for "lab-201"
  #   And I click on View details
  #   Then I see order delivery options
  @stageFail
  Scenario: Order pickup navigates to PWO
    When I search for "lab-201"
    Then I click on order pickup and verify utl to PWO

  @stageFail
  Scenario: Find a restaurant - no input search
    When I click on Find a Restaurant button
    And click on Search button
    Then I see all locations
 
    @stageFail
    Scenario: Locations - Limited Results Filter
      When I search for "30313"
      When check for Limited Results Filter and Open College Football Hall of Fame location
    @stageFail
    Scenario Outline: Locations - click on Location link  - check location details 
      When  I search for "<location>"
      And  I click on the location "<store>"
      Then  Details are displayed for location "<store>" 

      Examples:
      | location                               | store                                |
      | Atlanta, GA                            | Georgia State University             |
      | 30313                                  | College Football Hall of Fame        |
      | New York, NY                           | Fulton Street In-Line                |
      | 461 N Central Ave, Hapeville, GA 30354 | The Dwarf House                      |
    @stageFail
    Scenario Outline: Locations - Click on View Detail - check location details
      When  I search for "<location>"
      And  I click on the view details of location "<store>"
      Then  Details are displayed for location "<store>" 

      Examples:
      | location                               | store                           |
      | Atlanta, GA                            | Georgia State University        |
      | 30313                                  | College Football Hall of Fame   |
      | New York, NY                           | Fulton Street In-Line           |
      | 461 N Central Ave, Hapeville, GA 30354 | The Dwarf House                 |

#     @METS=Critical
#     @issue:CFACOMFOUR-141
#     Scenario Outline: Search for location and filter
#       When  I search for location "<location>"
#       And   I check the filter "<filter>"
#       And   I click on the location "<store>"
#       Then  Details for location "<store>" are displayed

# #       Examples:
# #         | location                                | store                 | filter           |
# #         | Atlanta, GA                             | Peachtree at Collier  | Playground       |
# #         | 30313                                   | Glenwood Place        | Drive thru       |
# #        | New York, NY                            | Brick Township        | WiFi             |
# #        | 461 N Central Ave, Hapeville, GA 30354  | Hapeville Dwarf House | Serves Breakfast |