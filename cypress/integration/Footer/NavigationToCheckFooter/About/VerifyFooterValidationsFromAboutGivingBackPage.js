// import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


And('Check URL Navigation and Header Text in Giving Back Page', (dataTable) => {
    dataTable.hashes().forEach(elem => {
    cy.get('#truett_intro h1').then($getHeaderText => {
        expect($getHeaderText.text().toLowerCase()).to.equal(elem.headerText)
    cy.url().should('include', Cypress.config().baseUrl+elem.urlNavigation)
    });

    });
});

