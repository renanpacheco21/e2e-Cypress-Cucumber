import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the login page", () => {
  cy.visit("https://parabank.parasoft.com/parabank/index.htm");
});
