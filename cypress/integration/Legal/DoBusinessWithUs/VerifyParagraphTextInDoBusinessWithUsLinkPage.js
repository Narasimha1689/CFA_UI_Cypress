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

And('Check Paragraph Text in Do Business With Us link page', (dataTable) => {
  dataTable.hashes().forEach((elem, index) => {
    cy.get('.dbwu-section p').eq(index).should('contain', elem.paragraphText)

    });
});

