@accountManagement
Feature: Account Management

  @createAccount
  Scenario Outline: create an account with valid e-mail
    Given I am on create an account page
    When I enter "<firstname>" "<lastname>" "<email>" "<password>" "<confirmPassword>"
    And I click on create an account
    Then Account creation is successful

    Examples:
      | firstname | lastname | email                  | password | confirmPassword |
      | kofi      | mamba    | mytesting621@gmail.com | Mamba123 | Mamba123        |


  @accountLogin
  Scenario Outline: login into account with a valid email
    Given I am on login page
    When  I enter "<email>" "<password>"
    And I click on sign in
    Then Account dashboard should display successfully

    Examples:
      | email                  | password |
      | mytesting621@gmail.com | Mamba123 |

