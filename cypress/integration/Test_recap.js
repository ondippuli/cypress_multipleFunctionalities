/// <reference types = 'cypress' />
describe("Revision Test", function () {
  it("Recap", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(1000);
    cy.get(".products").find(".product").eq(2).contains("ADD").click();
    cy.get(".products")
      .find(".product")
      .each((el, index, list) => {
        const vegName = el.find("h4.product-name").text();
        if (vegName.includes("Cashews")) {
          cy.wrap(el).contains("ADD").click();
        }
      });

    cy.get(".brand").should("have.text", "GREENKART");
    cy.get(".brand").then(function (brandName) {
      cy.log(brandName.text());
      // const headerName = brandName;
      // cy.log(headerName);
    });

    cy.get(".cart-icon > img").click();
    cy.get(".cart-preview > .action-block > button").click();
    cy.contains("Order").click();
  });
});
