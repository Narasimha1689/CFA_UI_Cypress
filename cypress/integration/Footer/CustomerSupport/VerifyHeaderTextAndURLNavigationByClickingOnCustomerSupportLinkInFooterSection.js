import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

And('Verify Footer section is visible or not', ()=> {
    cy.get('.footer', {timeout : 5000})
      .should('be.visible')
});

Then('Check Header Text and URL Navigation by clicking on Customer Support link in Footer Section', (dataTable) => {
    dataTable.hashes().forEach(elem => {
        cy.get('.footer-nav li')
        .find('a')
        .contains('Customer Support')
        .click()

        cy.get('.customer-support-search-header h1').should('contain', elem.headerText)
        cy.url().should('include',elem.urlNavigation)
    });
});