class homePage {
  getTwoWayDataBinding() {
    return cy.get(":nth-child(4) > .ng-untouched");
  }
  getEnterpreneur() {
    return cy.get("#inlineRadio3");
  }
}
export default homePage;
