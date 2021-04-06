describe("DB query", function () {
  it("DB querying", function () {
    cy.sqlServer("select * from Persons").then(function (result) {
      console.log(result);
    });
  });
});
