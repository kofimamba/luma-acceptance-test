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