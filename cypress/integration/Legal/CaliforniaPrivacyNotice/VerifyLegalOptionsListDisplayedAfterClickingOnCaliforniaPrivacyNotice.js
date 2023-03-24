import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

And('Verify Footer section is visible or not', ()=> {
    cy.get('.footer', {timeout : 5000})
      .should('be.visible')
});

// Then('Verify and Check Header Text and URL validation after clicking on California Privacy Notice link', (dataTable) => {
//     dataTable.hashes().forEach(elem => {
//         cy.get('.footer-nav li')
//           .find('a')
//           .contains('California Privacy Notice')
//           .click()

//         cy.get('.frame h1').should('contain', elem.headerText)
//         cy.url().should('include',Cypress.config().baseUrl+elem.urlNavigation)
//     });
// });

And('Legal options list displayed after clicking on California Privacy Notice link', (dataTable) => {
  dataTable.hashes().forEach(elem => {
      cy.get(".accordion-body  h2 span")
        .should('contain', elem.legalOptionsList)
  });
});
