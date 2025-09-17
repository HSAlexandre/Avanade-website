import { invalidUser } from "../fixtures/users.json";

describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("/Login");
  });

  it("Login can be performed successfuly using valid credentials", () => {
    cy.login(Cypress.env("email"), Cypress.env("pass"));
    cy.contains("Minhas aplicações").should("be.visible");
  });

  it("Warning message returned using no credentials", () => {
    cy.get('[id="login"]').click();
    cy.contains("Username is required.").should("be.visible");
    cy.contains("Password is required.").should("be.visible");
    cy.location("pathname").should("include", "/Login");
  });

  it("Error message returned using wrong credentials", () => {
    cy.login(invalidUser.username, invalidUser.password);
    cy.contains(
      "O nome de usuário ou senha pode estar incorreto ou o acesso pode ser restrito."
    ).should("be.visible");
    cy.location("pathname").should("include", "/Login");
  });
});
