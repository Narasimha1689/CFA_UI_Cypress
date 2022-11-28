import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

And('Verify Footer section is visible or not', ()=> {
    cy.get('.footer', {timeout : 5000})
      .should('be.visible')
});

Then('Check Merchandise URL Navigation in Footer Section', (dataTable) => {
    dataTable.hashes().forEach((elem, index) => {
        cy.get('.footer-nav li')
        .find('a')
        .contains('Merchandise')
        .click()

        cy.get('div h2').should('contain', 'Thanks for stopping by our shop')
        cy.url().should('include',elem.urlNavigation)
    });
});