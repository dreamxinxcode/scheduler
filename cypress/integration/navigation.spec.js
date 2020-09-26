describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });

  it('should navigate to Tuesday', () => {
    // visit root
    cy.visit('/');

    // find day containing 'Tuesday' and click
    cy.contains("[data-testid=day]", "Tuesday")
      .click()
      .should("have.class", "day-list__item--selected");

  });
});