import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { faker } from "@faker-js/faker";

Given("Acessa a pagina inicial e clica no botão para se cadastrar", () => {
  cy.visit("https://buger-eats.vercel.app/");
  cy.contains("Cadastre-se para fazer entregas").click();
});

When("Preenche os dados do responsável", () => {
  cy.get('input[name="name"]').type(faker.person.fullName());
  cy.get('input[name="cpf"]').type(faker.string.numeric(11));
  cy.get('input[name="email"]').type(faker.internet.email());
  cy.get('input[name="postalcode"]').type(95560000);
  cy.get('input[value="Buscar CEP"]').click();
  cy.get('input[name="city-uf"]').should("have.value", "Torres/RS");
  cy.contains("Moto").click();
  // cy.get("p")
  //   .should("not.have.value")
  //   .selectFile("./cypress/fixtures/jpeg.jpeg");
});

// Then("I have sucessful login", () => {
//   cy.get(".brand-image-xl");
// });
