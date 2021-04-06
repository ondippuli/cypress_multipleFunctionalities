import homePage from "./pageObjects/homePage";
describe("Building Framework", function () {
  before(function () {
    // called once before all the tests
    cy.fixture("example").then(function (testData) {
      this.callData = testData;
    });
  });

  // "url": "https://rahulshettyacademy.com/angularpractice/",

  // Use this site for Child tab testing https://example.cypress.io/

  it("Value from a table", function () {
    const home = new homePage();
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get(":nth-child(1) > .form-control").type(this.callData.name);
    cy.get("#exampleFormControlSelect1").select(this.callData.gender);

    // Validating attribute properties & Building Page objects
    home.getTwoWayDataBinding().should("have.value", this.callData.name);
    cy.get(":nth-child(1) > .form-control").should("be.attr", "minlength", 2);
    home.getEnterpreneur().should("be.disabled");

    // reusable function & Parameterize test with multiple data set /For Each
    cy.get(":nth-child(2)>.nav-link").click();
    this.callData.productSelection.forEach((element) => {
      cy.productSelection(element);
    });

    cy.contains("Checkout").click();

    // Summing up numbers
    let sum = 0;

    cy.get("tr td:nth-child(4) strong")
      .each((el, index, list) => {
        let amount = el.text();
        let amountValue = amount.split(" ");
        amountValue = amountValue[1].trim();
        cy.log(amountValue);
        sum = Number(sum) + Number(amountValue);
      })
      .then(function () {
        cy.log(sum);
      });

    cy.get("h3 strong").then(function (element) {
      let total = element.text();
      total = total.split(" ");
      let finalTotal = total[1].trim();
      cy.log("finalTotal");
      expect(Number(finalTotal)).to.equal(Number(sum));
    });

    cy.get("button.btn.btn-success").click();

    // Dynamic selection from the list
    cy.get("#country").type("ind");
    cy.get(".suggestions>ul > li > a").each((el, index, list) => {
      if (el.text() === "India") {
        cy.wrap(el).click();
      }
      // if (el.text().includes("India")) {
      //   cy.get(".suggestions >ul > li > a").eq(index).click();
      // }
      cy.get("#checkbox2").check({ force: true });
      cy.get("input[type='submit']").click();

      // cy.get(".alert").then(function (content) {
      //   const validation = content.text();
      //   if (validation.includes("Success")) {
      //     cy.log("Successfully Validated");
      //   }
      // });
      // cy.get(".alert").contains("Success");

      // Validation of completion message
      cy.get(".alert").then(function (content) {
        const validMsg = content.text();
        expect(validMsg.includes("Success")).to.be.true;
      });
    });
  });
});
