import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { about_PO } from "../../support/pageObjects/AboutPO.js";

When('Mousehover on the About Menu and click it', ()=> {
    about_PO.HomePage_MenuItems("About")
});

And('Verify User landed in default Who we are page', ()=> {
    about_PO.WhoWeAre_Page('Who we are')
});

And('Click on Purchase Tickets button', () => {
    about_PO.ClickOnPurchaseTickets()
});

Then('Verify the Reservation Home tickets page', () => {
    about_PO.VerifyReservationHomePage()
})
