describe("Multiple functionalities", function () {
  it("Checkbox and radio button", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    // Type text

    const name = "Rose Gold";
    const email = "abc@gmail.com";
    const pwd = 123456;

    cy.get(":nth-child(1) > .form-control")
      .type(name)
      .should("be.attr", "minlength", 2);
    expect(name).to.be.a("string").and.not.be.empty;

    cy.get(":nth-child(2) > .form-control")
      .type(email)
      .should("include.value", "@gmail.com");

    //  Hiding password
    cy.get(":nth-child(3) > .form-control").type(pwd, { log: false });
    assert.isNumber(pwd, "val is number", { log: false });

    // Checkbox and radio button
    cy.get("#exampleCheck1").check().should("be.checked");
    cy.get("#inlineRadio1").check({ force: true });

    // select from static dropdown
    cy.get("#exampleFormControlSelect1").select("Female");

    cy.get(".ng-untouched").should("have.value", name);
  });
});
