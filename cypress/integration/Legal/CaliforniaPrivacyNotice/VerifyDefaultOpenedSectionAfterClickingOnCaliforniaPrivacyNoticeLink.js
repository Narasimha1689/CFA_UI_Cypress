import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

And('Verify Footer section is visible or not', ()=> {
    cy.get('.footer', {timeout : 5000})
      .should('be.visible')
});

Then('Check Header Text and URL validation after clicking on California Privacy Notice link', (dataTable) => {
    dataTable.hashes().forEach(elem => {
        cy.get('.footer-nav li')
          .find('a')
          .contains('Privacy Policy')
          .click()

        cy.get('.frame h1').should('contain', elem.headerText)
        cy.url().should('include',elem.urlNavigation)
    });
});

And('Check the default opened tab section under California Privacy Notice page', (dataTable) => {
  dataTable.hashes().forEach(elem => {
      cy.get(".accordion-body h2[class='toggle active'] span")
        .should('contain', elem.defaultTabOpen)
  });
});

And('Check the Content in default opened tab under California Privacy Notice page', (dataTable) => {
  dataTable.hashes().forEach(elem => {
      cy.get(".accordion-body section[aria-hidden='false'] h3")
        .should('contain', elem.defaultTabOpenSection)
  });
});
