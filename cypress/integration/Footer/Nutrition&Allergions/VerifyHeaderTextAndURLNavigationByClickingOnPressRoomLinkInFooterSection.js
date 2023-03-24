import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

And('Verify Footer section is visible or not', ()=> {
    cy.get('.footer', {timeout : 5000})
      .should('be.visible')
});

// Then('Check Header Text and URL Navigation by clicking on Nutritions and Allergions Page', (dataTable) => {
//     dataTable.hashes().forEach(elem => {
//         cy.get('.footer-nav li')
//         .find('a')
//         .contains('Nutrition & Allergens')
//         .click({force : true})

//         cy.get('#nutrition-and-allergens h1').should('contain', elem.headerText)
//         cy.url().should('include',Cypress.config().baseUrl+elem.urlNavigation)
//     });
// });