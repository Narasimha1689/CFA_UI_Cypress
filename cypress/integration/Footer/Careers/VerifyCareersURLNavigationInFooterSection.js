import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

And('Verify Footer section is visible or not', ()=> {
    cy.get('.footer', {timeout : 5000})
      .should('be.visible')
});

Then('Check Careers URL Navigation in Footer Section', (dataTable) => {
    dataTable.hashes().forEach((elem, index) => {
        cy.get('.footer-nav li')
        .find('a')
        .contains('Careers')
        .click()

        cy.get('.wrapper h1').should('contain', 'Chick-fil-A')
        cy.url().should('include',Cypress.config().baseUrl+elem.urlNavigation)
    });
});