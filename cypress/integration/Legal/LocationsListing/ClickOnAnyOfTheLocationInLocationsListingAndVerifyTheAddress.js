import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

And('Verify Footer section is visible or not', ()=> {
    cy.get('.footer', {timeout : 5000})
      .should('be.visible')
});

// Then('Verify and Check Header Text and URL validation after clicking on Locations Listing link', (dataTable) => {
//     dataTable.hashes().forEach(elem => {
//         cy.get('.footer-nav li')
//           .find('a')
//           .contains('Locations listing')
//           .click()

//         cy.get('.wrapper h1').should('contain', elem.headerText)
//         cy.url().should('include',Cypress.config().baseUrl+elem.urlNavigation)
//     });
// });

And('Click on the State selected in Locations Listing page', (dataTable)=> {
  dataTable.hashes().forEach((elem,index) => {
    cy.get(".wrapper[role='main'] li a")
      .eq(index)
      .should('contain', elem.statesList)
      .click()
  });
});

// Then('Verify the URL Navigation and check for Address location', (dataTable)=> {
//   dataTable.hashes().forEach(elem => {
//     cy.get('.wrapper h1').should('contain', elem.headerText)
//     cy.url().should('include',elem.urlNavigation)
//     cy.get('.state-locations-list .location p').should('contain', elem.addressLoc)
//   });
// });

And('Click on the location and Verify URL Navigation and the Address', (dataTable)=> {
  dataTable.hashes().forEach(elem => {
    cy.get(".wrapper[role='main'] h2 a")
      .eq(0)
      .should('contain', '5 Points In-Line')
      .click()

    cy.get('.location-title-header h1').should('contain', elem.headerText)
    cy.url().should('include',Cypress.config().baseUrl+elem.urlNavigation)
    cy.get('.split-content .address').should('contain', elem.addressLoc)
  });
});
