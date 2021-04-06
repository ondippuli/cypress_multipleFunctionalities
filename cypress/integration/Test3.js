/// <reference types = "Cypress" />
describe("Working on checkbox", function () {
  it("Project No.2", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/ ");
    cy.get("#checkbox-example").find("#checkBoxOption1").click();
    cy.get("#checkbox-example")
      .find("#checkBoxOption2")
      .check()
      .should("be.checked")
      .and("have.value", "option2");
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    cy.get("input[type='checkbox']").check(["option3"]);

    // select option from static dropdown
    cy.get("Select").select("option3").should("have.value", "option3");

    // Select option from dynamic dropdown
    cy.get("#autocomplete").type("ind");
    cy.get(".ui-menu-item div").each((el, index, $list) => {
      if (el.text() === "Indonesia") {
        cy.wrap(el).click();
      }
    });
    cy.get("#autocomplete").should("have.value", "Indonesia");
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    cy.get('input[value="radio1"]')
      .check()
      .should("be.checked")
      .and("have.value", "radio1");

    // Alert-Browser events
    cy.get("#alertbtn").click();
    cy.on("window:alert", (str) => {
      // Mocha: comparing string
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });
    cy.get("input[value='Confirm']").click();
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });

    //parent child tab
    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.url().should("include", "rahulshettyacademy");
    cy.go("back");
  });
});

//
//
