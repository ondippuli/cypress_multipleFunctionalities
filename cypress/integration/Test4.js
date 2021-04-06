describe("Derive value from the list", function () {
  it("Value from a table", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // Retrieve data from table
    cy.get("tr td:nth-child(2)").each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes("REST")) {
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (txtPrice) {
            const price = txtPrice.text();
            expect(price).to.equal("35");
          });
      }
    });
    // Mouse Hover
    cy.contains("Top").click({ force: true });
    // cy.get(".mouse-hover-content").invoke("show");
    // cy.contains("Top").click();
    cy.url().should("includes", "top");

    // retrieve property value
    cy.get("#opentab").then(function (site) {
      const newSite = site.prop("href");
      cy.log(newSite);
      //   cy.visit(newSite);
    });
  });
});
