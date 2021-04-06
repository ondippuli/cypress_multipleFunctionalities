// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
Cypress.Commands.add("productSelection", (productName) => {
  cy.get("h4.card-title").each((el, index, list) => {
    if (el.text().includes(productName)) {
      cy.get("button.btn.btn-info").eq(index).click();
    }
  });
});

Cypress.Commands.add("itemSelection", (itemName) => {
  cy.get(".a-section.a-spacing-none.a-spacing-top-small")
    .find(".a-size-base-plus.a-color-base.a-text-normal")
    .each((el, index, list) => {
      const brand = el.text();
      if (brand.includes(itemName)) {
        cy.wrap(el).click();
      }
    });
});

//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
