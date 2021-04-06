/// <reference types = 'cypress' />
describe("WOrking on Checkbox,Dropdown and radio buttons", function () {
  it("CHeckbox, Dynamic & Static dropdown, Radio buttons", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    // CheckBox
    cy.get("#checkBoxOption1")
      .check("option1")
      .should("be.checked")
      .and("have.value", "option1");
    cy.get("input[type='checkbox']").check(["option3"]);
    cy.get("#checkBoxOption2").uncheck("option2").should("not.be.checked");

    // Radio button - Same as checkbox
    cy.get("input[type='radio']").check();
    cy.get(".radioButton")
      .check("radio2")
      .should("be.checked")
      .and("have.value", "radio2");

    // Dropdown
    cy.get("select").select("option2").should("have.value", "option2");
    cy.get("#autocomplete").type("ind");
    cy.get(".ui-menu-item").each((el, index, list) => {
      if (el.text() === "India") {
        cy.wrap(el).click();
      }
    });

    // visible & Invisible
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
  });
});
