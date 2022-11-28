import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

And('Verify Footer section is visible or not', ()=> {
    cy.get('.footer', {timeout : 5000})
      .should('be.visible')
});

Then('Navigate to Do Business With Us link page and verify the Header Text', (dataTable) => {
    dataTable.hashes().forEach(elem => {
        cy.get('.footer-nav li')
          .find('a')
          .contains('Do business with us')
          .click()

        cy.get('.wrapper h1').should('contain', elem.headerText)
      });
});

And('Click on the Learn More button and Verify the URL Navigation', (dataTable) => {
  dataTable.hashes().forEach(elem => {
    cy.get('.dbwu-section p').find('a').first().click()
    cy.get('.wrapper h1').should('contain', elem.headerText)
    cy.url().should('include', elem.urlNavigation)

    });
});