import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { about_PO } from "../../../support/pageObjects/AboutPO.js";

// When('Mousehover on the About Menu and click it', ()=> {
//     about_PO.HomePage_MenuItems("About")
// });

And('Check Header Text in Who We Are Page', () => {
    cy.get('#truett_intro h1').then($getHeaderText => {
        expect($getHeaderText.text().toLowerCase()).to.equal('who we are')
    })
});

And('Click on Read about our commitment button', () => {
    about_PO.ClickOnReadaboutOurCommitment()
});

Then('Verify user navigated to respective page', (dataTable) => {
    dataTable.hashes().forEach(elem => {
        cy.url().should('contain', elem.navURL)
    });
    about_PO.TextValidation()
});

And('Verify the Header Text', ()=> {
    cy.get('.wrapper h1').should('contain','Committed to being Better at Together')
})