import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

And('Verify Footer section is visible or not', ()=> {
    cy.get('.footer', {timeout : 5000})
      .should('be.visible')
});

Then('Check Header Text and URL Navigation by clicking on Press Room Page', (dataTable) => {
    dataTable.hashes().forEach(elem => {
        cy.get('.footer-nav li')
        .find('a')
        .contains('Press Room')
        .click({force : true})

        cy.get('.wrapper h1').should('contain', elem.headerText)
        cy.url().should('include',elem.urlNavigation)
    });
});

And('Check Press Contacts header text in Press Room page', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
        cy.get('.module').find('h3').eq(0).should('contain',elem.headerText)
      });
});

Then('Verify displayed links under Press Contacts section', (dataTable) => {
    dataTable.hashes().forEach(elem => {
        cy.get('.module')
          .eq(0)
          .find('dd a')
          .then(elemList => {
            expect(elemList).to.contain(elem.displayedLinks)
          })
      });
});

And('Click on the Form link and Verify the url Navigation', (dataTable)=> {
  dataTable.hashes().forEach(elem => {
  cy.get('.module')
    .eq(0)
    .find('dd a')
    .each(($e1, index, $elemList) => {
      if($e1.text().includes('Form Link')) {
        cy.wrap($e1).click()
      }
    });

  cy.get('.wrapper h1').should('contain','Media Request Form')
  cy.url().should('contain', elem.urlNAvigation)
});
});
