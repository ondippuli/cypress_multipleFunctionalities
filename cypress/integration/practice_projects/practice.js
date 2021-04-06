describe("Practice tests", function () {
  before(function () {
    cy.fixture("example").then(function (itemSelected) {
      this.item = itemSelected;
    });
  });

  it("Amazon login", function () {
    cy.visit(Cypress.env("url"));

    cy.get("div span#nav-link-accountList-nav-line-1").click();

    const username = Cypress.env("uname");
    const password = Cypress.env("pwd");

    expect(username).to.be.a("string").and.not.be.empty;
    // expect(password).to.be.a("string").and.not.be.empty;
    if (typeof password !== "string" || !password) {
      cy.log("Enter valid password");
    }

    cy.get('div input[type="email"]').type(username);
    cy.get(".a-button-inner > #continue").click();
    cy.get("div input[type='password']").type(password, {
      log: false,
    });
    cy.get(".a-button-inner > #signInSubmit").click();
    cy.get("#twotabsearchtextbox").type("watch");
    // cy.get("div#issDiv4").click();
    cy.get("#nav-flyout-searchAjax").each((el, index, list) => {
      cy.wrap(el).contains("watches for men").click();
    });
    // cy.get(".a-section.a-spacing-none.a-spacing-top-small")
    //   .find(".a-size-base-plus.a-color-base.a-text-normal")
    //   .each((el, index, list) => {
    //     const brand = el.text();
    //     if (brand.includes("Multifunctional")) {
    //       cy.wrap(el).click();
    //     }
    //   });
    cy.itemSelection(this.item.itemName);
  });
  // it("Second Test case", function () {
  //   cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
  // });
});

// cy.visit(Cypress.env("url"));
