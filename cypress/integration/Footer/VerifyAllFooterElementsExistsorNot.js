import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

And('Verify Footer section is visible or not', ()=> {
    cy.get('.footer', {timeout : 5000})
      .should('be.visible')
});

Then('Check All Footer elements Exists or NOT', (dataTable) => {
    dataTable.hashes().forEach((elem, index) => {
        cy.get('.footer-nav li')
          .find('a')
          .eq(index)
          .should('contain', elem.footerElements)
    });
});