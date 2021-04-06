/// <reference types = "Cypress"/>
describe("API Testing on test page", function () {
  it("API Testing", function () {
    cy.visit("https://example.cypress.io/commands/network-requests");
    cy.intercept(
      {
        method: "PUT",
        URL: "comments/*",
      },
      {
        statusCode: 404,
        body: { error: "Server Down! NOT REACHABLE" },
        delayMs: 500,
      }
    ).as("putComment");
    cy.get(".network-put").click();
    cy.wait("@putComment");
    cy.get(".network-put-comment").should("contain", "NOT");
  });
});
