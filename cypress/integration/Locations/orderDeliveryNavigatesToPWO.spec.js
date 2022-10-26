And("I click on View details", () => {
  cy.iframe('#locatoriframe').contains('View details').first().should('be.visible').click();
});

Then("I see order delivery options", () => {
  cy.verifyHref(
    "#LocationDetail-OrderPickup",
    "https://order.chick-fil-a.com/load-dot-com?locationNumber=03197"
  );

  cy.verifyHref(
    "#LocationDetail-OrderDelivery",
    "#delivery-type-modal"
  );

  cy.verifyHref(
    "#LocationDetail-OrderCatering",
    "https://order.chick-fil-a.com/load-catering?locationNumber=03197"
  );
  cy.verifyHref(
    "#LocationDetail-UberEats > a",
    "https://www.ubereats.com/store/chick-fil-a-15180-washington-st/jgUTpdn4QrKkKEZXFSePWQ"
  );

  cy.verifyHref(
    "#LocationDetail-Doordash > a",
    "https://doordash.com/store/390565?utm_source=partner-link&utm_medium=website&utm_campaign=258545"
  );

  cy.verifyHref(
    "#LocationDetail-GrubHub > a ",
    "https://grubhub.com/restaurant/2045047"
  );

  cy.verifyHref(
    "#LocationDetail-PostMates > a",
    "https://www.postmates.com/store/chick-fil-a-15180-washington-st/jgUTpdn4QrKkKEZXFSePWQ"
  );

});
