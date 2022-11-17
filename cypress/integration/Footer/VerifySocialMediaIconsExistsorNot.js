import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

And('Verify Footer section is visible or not', ()=> {
    cy.get('.footer', {timeout : 5000})
      .should('be.visible')
});

Then('Check All Social Media Icons Exists or NOT', (dataTable) => {
    dataTable.hashes().forEach((elem, index) => {
        cy.get('.social li')
          .find('span')
          .eq(index)
          .should('contain', elem.socialMediaIcons)
    });
});