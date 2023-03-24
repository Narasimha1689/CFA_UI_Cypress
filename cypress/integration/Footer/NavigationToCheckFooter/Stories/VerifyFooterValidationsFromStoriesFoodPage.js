// import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

When('I click on the {string} section', ()=> {
    cy.get('#navitem-stories ul li a')
      .contains('Food')
      .click({force:true})

});

And('Check URL Navigation and Header Text in Stories Food Page', (dataTable) => {
    dataTable.hashes().forEach(elem => {
    cy.get('.category-tagline h1').then($getHeaderText => {
        expect($getHeaderText.text().toLowerCase()).to.equal(elem.headerText)
    cy.url().should('include', Cypress.config().baseUrl+elem.urlNavigation)
    });

    });
});

