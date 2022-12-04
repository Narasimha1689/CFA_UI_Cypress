import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
// import { about_PO } from "../../../support/pageObjects/AboutPO.js";

// Given('I am on the {} page', ()=> {
//     about_PO.NavigateToAboutSubMenuURL("Giving Back")
// });

And('Check Header Text in Who We Are Page', () => {
    cy.get('#truett_intro h1').then($getHeaderText => {
        expect($getHeaderText.text().toLowerCase()).to.equal('who we are')
    })
});

Then('Check Executive Bio Page Names displayed', (dataTable) => {
    dataTable.hashes().forEach((elem, index) => {
        cy.get('.mini-facts h3 strong')
          .eq(index)
          .should('contain',elem.bioPageNames)
    });
 });
 
