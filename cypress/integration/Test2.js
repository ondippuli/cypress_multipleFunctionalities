/// <reference types = 'Cypress' />

describe("My second scenario", function () {
  it("Test case - 2", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2500);
    cy.get(".products").as("productList");
    cy.get("@productList")
      .find(".product")
      .eq(1)
      .contains("ADD TO CART")
      .click();
    cy.get("@productList")
      .find(".product")
      .each((el, index, list) => {
        const itemName = el.find(".product-name").text();
        if (itemName.includes("Cashews")) {
          cy.wrap(el).contains("ADD TO CART").click();
        }
      });

    // cy.get(".brand").should("have.text", "GREENKART");

    // cy.get(".brand").then(function (brandVariable) {
    //   cy.log(brandVariable.text());
    // });
    cy.get(".cart-icon").click();
    cy.contains("CHECKOUT").click();
    cy.contains("Place").click();
  });
});
