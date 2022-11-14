import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { about_PO } from "../../../support/pageObjects/AboutPO.js";

// Given('I am on the {} page', ()=> {
//     about_PO.NavigateToAboutSubMenuURL("Giving Back")
// });

And('Verify Giving Back Header Text Page', () => {
    cy.get('#truett_intro h1').first().then($getHeaderText => {
        expect($getHeaderText.text().toLowerCase()).to.equal('giving back')
    })
});
