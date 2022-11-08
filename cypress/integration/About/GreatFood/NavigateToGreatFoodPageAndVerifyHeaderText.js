import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { about_PO } from "../../../support/pageObjects/AboutPO.js";

// Given('I am on the {} page', ()=> {
//     about_PO.NavigateToAboutSubMenuURL("Great Food")
// });

And('Verify Great Food Header Text Page', () => {
    cy.get('.hero-text-block h1').first().then($getHeaderText => {
        expect($getHeaderText.text().toLowerCase()).to.equal('great food')
    })
});
