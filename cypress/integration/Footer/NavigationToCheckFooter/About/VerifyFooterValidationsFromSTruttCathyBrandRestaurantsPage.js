// import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


When('Check URL Navigation and Header Text in About S.TruttCathyBrandRestaurants Page', (dataTable) => {
    dataTable.hashes().forEach(elem => {
    cy.get('.wrapper h1').then($getHeaderText => {
        expect($getHeaderText.text().toLowerCase()).to.equal(elem.headerText)
    cy.url().should('include', elem.urlNavigation)
    });

    });
});

