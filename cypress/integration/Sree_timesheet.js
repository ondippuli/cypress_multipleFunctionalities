describe("Timesheet", function () {
  it("Timesheet No:1 - Spring Ahead", function () {
    cy.visit(
      "https://my.springahead.com/go/Account/LogOn?ReturnUrl=%2fgo%2fHome%2fIndex"
    );

    const company = "CAS Group";
    const uname = "sreekala.ullatil@casgroup.com";
    const pwd = "Ammu@0110";
    const hours = 8;
    const me = "ullatil";

    // Enter User credentials
    cy.get(".editor-field > #CompanyLogin").type(company).should("exist");
    expect(company).to.be.a("string").and.not.be.empty;
    cy.get(".editor-field > #UserName").type(uname).should("exist");
    expect(uname).to.be.a("string").and.not.be.empty;
    cy.get("#Password").type(pwd, { log: false }).should("exist");
    cy.get("#submit").click();

    // Selecting the project
    cy.get(".small").click();
    cy.get(
      ":nth-child(1) > .wsParentTd > .wrapSelect > .wrapSelectDisplay > .wrapSelectDisplayTable > tbody > tr > .wrapSelectTexttd > .wrapSelectText"
    ).type(me);
    cy.get(":nth-child(3) > .ui-corner-all").click();

    // Clear existing hours
    cy.get(":nth-child(1) > :nth-child(-n+7) > .hours").clear();

    // Entering the hours
    cy.get(":nth-child(1) > :nth-child(-n+7) > .hours").then((els) => {
      [...els].forEach((el) => cy.wrap(el).type(hours));
    });

    //Validating for 40hrs
    cy.get("input.htot.text.bold").should("have.value", 40);
    cy.get(".htott").should("have.value", 40);

    // Save the data
    cy.get("#btn_save_continue").click();

    // Save and close the data
    // cy.get("#btn_save");

    // Submit the timesheet
    // cy.get('#submitall').click()
  });
});
