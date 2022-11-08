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

Then('Click on Executive Bio Page link and Verify user navigated to respective URL page', (dataTable) => {
    dataTable.hashes().forEach((elem, index) => {
        cy.get('.award-blurb').find('a').eq(index).click({force:true})
        cy.url().should('contain',elem.navURL)
        cy.go('back')
    });
 });
 
