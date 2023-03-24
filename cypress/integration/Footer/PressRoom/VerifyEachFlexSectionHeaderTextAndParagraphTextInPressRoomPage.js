import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

And('Verify Footer section is visible or not', ()=> {
    cy.get('.footer', {timeout : 5000})
      .should('be.visible')
});

// Then('Check Header Text and URL Navigation by clicking on Press Room Page', (dataTable) => {
//     dataTable.hashes().forEach(elem => {
//         cy.get('.footer-nav li')
//         .find('a')
//         .contains('Press Room')
//         .click({force : true})

//         cy.get('.wrapper h1').should('contain', elem.headerText)
//         cy.url().should('include',elem.urlNavigation)
//     });
// });

// And('Verify header text and paragraph text in Press Room page', (dataTable)=> {
//     dataTable.hashes().forEach((elem, index) => {
//         cy.get('.teasers .content').find('a').eq(index).should('contain',elem.headerText)
//         cy.get('.teasers .content').find('p').eq(index).should('contain',elem.paragraphText)

//       });
// });

And('Verify header text and paragraph text in Press Room page', (dataTable)=> {
  dataTable.hashes().forEach((elem, index) => {
      cy.get('.teasers .content').find('a').eq(index).should('contain',elem.headerText)
      // cy.get('.teasers .content').find('p').eq(index).should('contain',elem.paragraphText)

    });
});
