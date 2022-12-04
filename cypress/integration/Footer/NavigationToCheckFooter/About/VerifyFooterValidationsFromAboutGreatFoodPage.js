// import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

// // Given('I am on the {} page', ()=> {
// //     about_PO.NavigateToAboutSubMenuURL("Giving Back")
// // });

And('Check URL Navigation and Header Text in Great Food Page', (dataTable) => {
    dataTable.hashes().forEach(elem => {
    cy.get('#food_is_essential_so_make_it_good h1').then($getHeaderText => {
        expect($getHeaderText.text().toLowerCase()).to.equal(elem.headerText)
    cy.url().should('include', elem.urlNavigation)
    });

    });
});

