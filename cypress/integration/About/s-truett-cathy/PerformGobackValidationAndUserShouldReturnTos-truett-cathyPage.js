import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { about_PO } from "../../../support/pageObjects/AboutPO.js";

// Given('I am on the {} page', ()=> {
//     about_PO.NavigateToAboutSubMenuURL("Giving Back")
// });

And('Check Header Text in s-truett-cathy page', () => {
    cy.get('.wrapper h1').then($getHeaderText => {
        expect($getHeaderText.text().toLowerCase()).to.equal('s. truett cathy brand restaurants')
    })
});

Then('Check URL navigation after clicking on Dwarf House Header Text in s-truett-cathy page', (dataTable) => {
    dataTable.hashes().forEach(elem => {
        cy.get('.g-round-card a').last().contains(elem.HeadersText).click()
        cy.url().should('contain', elem.navURLs)
        cy.get('.g-hero__text h1').should('contain', 'Dwarf House')
    });
 });
 
 And('perform Go Back action', () => {
    cy.go('back')
 });

 Then('user should return to s-truett-cathy page', (dataTable) => {
    dataTable.hashes().forEach(elem => {
        cy.url().should('contain', elem.homePageURL)    
    });
    cy.get('.wrapper h1').then($getHeaderText => {
        expect($getHeaderText.text().toLowerCase()).to.equal('s. truett cathy brand restaurants')
    })
 });
