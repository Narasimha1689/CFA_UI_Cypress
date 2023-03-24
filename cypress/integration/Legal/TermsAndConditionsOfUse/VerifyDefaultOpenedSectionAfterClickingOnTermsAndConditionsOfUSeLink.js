import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

And('Verify Footer section is visible or not', ()=> {
    cy.get('.footer', {timeout : 5000})
      .should('be.visible')
});

Then('Check Header Text and URL validation after clicking on Terms and Conditions of use link', (dataTable) => {
    dataTable.hashes().forEach(elem => {
        cy.get('.footer-nav li')
          .find('a')
          .contains('Terms and Conditions of Use')
          .click()

        cy.get('.frame h1').should('contain', elem.headerText)
        cy.url().should('include',Cypress.config().baseUrl+elem.urlNavigation)
    });
});

And('Check the default opened tab section under Terms and Conditions of use page', (dataTable) => {
  dataTable.hashes().forEach(elem => {
      cy.get(".accordion-body h2[class='toggle active'] span")
        .should('contain', elem.defaultTabOpen)
  });
});

And('Check the Content in default opened tab under Terms and Conditions of use page', (dataTable) => {
  dataTable.hashes().forEach(elem => {
      cy.get(".accordion-body section[aria-hidden='false'] h3")
        .should('contain', elem.defaultTabOpenSection)
  });
});
