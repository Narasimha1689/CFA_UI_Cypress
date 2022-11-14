import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { about_PO } from "../../../support/pageObjects/AboutPO.js";

// Given('I am on the {} page', ()=> {
//     about_PO.NavigateToAboutSubMenuURL("Great Food")
// });

And('Verify Great Food Header Text Page in Great Food page', () => {
    cy.get('.hero-text-block h1').first().then($getHeaderText => {
        expect($getHeaderText.text().toLowerCase()).to.equal('great food')
    })
});

Then('Verify download the report in Great Food page', (dataTable) => {
        cy.get('.cta-container a').should('be.visible')
        // .click()
        // cy.wait(10000)
        // cy.readFile('cypress\downloads\Chick-fil-A 2021 Corporate Social Responsibility Report.pdf')
        //   .should('exist')
});


