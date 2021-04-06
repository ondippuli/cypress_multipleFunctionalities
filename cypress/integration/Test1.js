/// <reference types="Cypress" />

describe("My first Cypress Test Suite", function () {
  it("My first Test Case", function () {
    cy.wait(2000);
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    // cy.get(".product:visible").should("have.length", 4);
    cy.get(".products").as("productLocator");
    cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click();
    cy.get("@productLocator")
      .find(".product")
      .each((el, index, list) => {
        const headerText = el.find("h4.product-name").text();
        if (headerText.includes("Cashews")) {
          cy.wrap(el).contains("ADD TO CART").click();
        }
      });
    cy.get(".brand").should("have.text", "GREENKART");
    cy.get(".brand").then(function (getText) {
      cy.log(getText.text());
    });
  });
});
