Feature: Login

Scenario: Valid Login
    Given I'm on the login page
    When I type a registered my email and password
    Then I have sucessful login