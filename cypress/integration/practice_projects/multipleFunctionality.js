describe("Multiple functionalities", function () {
  it("Checkbox and radio button", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#checkBoxOption1").check();
  });
});
