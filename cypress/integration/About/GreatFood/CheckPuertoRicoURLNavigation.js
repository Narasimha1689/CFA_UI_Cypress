import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { about_PO } from "../../../support/pageObjects/AboutPO.js";

// Given('I am on the About {string} page', ()=> {
//     about_PO.NavigateToAboutSubMenuURL("Great Food")
// });

And('Verify Great Food Header Text Page in Great Food page', () => {
    cy.get('.hero-text-block h1').first().then($getHeaderText => {
        expect($getHeaderText.text().toLowerCase()).to.equal('great food')
    })
});

Then('Verify Puerto Rico URL navigation in Great Food page', (dataTable) => {
   dataTable.hashes().forEach(elem => {
    cy.get('.content p a:visible').contains(elem.paragraphLinks)
      .focus()
      .click({force:true})
    cy.url().should('contain', elem.greatFoodURLNavigation)    
    cy.get('.header-logo__link').should('be.visible')           
    });
});


