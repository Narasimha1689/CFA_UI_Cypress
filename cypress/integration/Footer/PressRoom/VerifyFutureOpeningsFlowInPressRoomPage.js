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

And('Check Future Openings header text in Press Room page', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
        cy.get('#future-openings-id').find('h3').should('contain',elem.headerText)
      });
});

Then('Verify Each URL navigation after clicking on Each Country Link', (dataTable) => {
    dataTable.hashes().forEach((elem, index) => {
        cy.get('#future-openings-id dd')
          .find('a')
          .eq(index)
          .click()
          
        cy.url().should('contain',elem.urlNavigation)
        cy.go('back')
      });
})
