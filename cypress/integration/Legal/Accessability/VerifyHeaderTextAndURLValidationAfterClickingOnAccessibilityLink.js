import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

And('Verify Footer section is visible or not', ()=> {
    cy.get('.footer', {timeout : 5000})
      .should('be.visible')
});

Then('Verify and Check Header Text and URL validation after clicking on Accessibility link', (dataTable) => {
    dataTable.hashes().forEach(elem => {
        cy.get('.footer-nav li')
          .find('a')
          .contains('Accessibility')
          .click()

        cy.get('.frame h1').should('contain', elem.headerText)
        cy.url().should('include',elem.urlNavigation)
    });
});
