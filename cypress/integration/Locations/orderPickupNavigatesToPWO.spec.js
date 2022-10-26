Then("I click on order pickup and verify utl to PWO", () => {
  cy.iframe('#locatoriframe').contains('View details').first().should('be.visible').click();
  cy.contains('Order Pickup').click();
  cy.url().should('include', 'order.chick-fil-a.com')
});

Then("I see order pickup options", () => {
  // cy.getDataCy("Drive-thru").should("be.visible");
  // cy.getDataCy("Carry-out").should("be.visible");
  // cy.getDataCy("Curbside").should("be.visible");
  //cy.url().should('include', 'order.chick-fil-a.com')
  //cy.url().should('have.text',"order.chick-fil-a.com")
});
