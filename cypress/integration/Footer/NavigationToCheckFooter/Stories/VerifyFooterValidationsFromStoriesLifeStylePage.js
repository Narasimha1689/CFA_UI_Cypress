// import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

When('I click on the Lifestyle section', ()=> {
    cy.get('#navitem-stories ul li a')
      .contains('Lifestyle')
      .click({force:true})
});

When('Verify URL Navigation and Header Text in Stories Lifestyle Page', (dataTable) => {
    dataTable.hashes().forEach(elem => {
    cy.get('.category-tagline h1').then($getHeaderText => {
        expect($getHeaderText.text().toLowerCase()).to.equal(elem.headerText)
    cy.url().should('include', Cypress.config().baseUrl+elem.urlNavigation)
    });

    });
});

