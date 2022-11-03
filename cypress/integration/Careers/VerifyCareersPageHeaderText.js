import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
// import { about_PO } from "../../support/pageObjects/AboutPO.js";

When('clicked on the Careers Menu', ()=> {
    cy.get('.main-nav li span').contains("Careers")
          .trigger('mouseover')
          .click()
});

And('perform Careers Page Header Text Validation', ()=> {
    cy.get('#LocationFrameId h1').should('have.text', 'Careers')
});
