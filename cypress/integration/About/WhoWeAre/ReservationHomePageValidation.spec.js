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

And('Click on Purchase Tickets button', () => {
    about_PO.ClickOnPurchaseTickets()
});

Then('Verify the Reservation Home tickets page', () => {
    // dataTable.hashes().forEach(elem => {
    //     cy.url().should('contain', elem.URLCheck)
    // });
    about_PO.VerifyReservationHomePage()
})
