// import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

When('I click on the News section', ()=> {
    cy.get('#navitem-stories ul li a')
      .contains('News')
      .click({force:true})

});

And('Verify URL Navigation and Header Text in Stories News Page', (dataTable) => {
    dataTable.hashes().forEach(elem => {
    cy.get('.wrapper h1').then($getHeaderText => {
        expect($getHeaderText.text().toLowerCase()).to.equal(elem.headerText)
    cy.url().should('include', Cypress.config().baseUrl+elem.urlNavigation)
    });

    });
});

