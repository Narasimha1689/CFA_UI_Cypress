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

Then('Check URL navigation after clicking on The Truett Chick-fil-A Header Text in s-truett-cathy page', (dataTable) => {
    dataTable.hashes().forEach(elem => {
        cy.get('.g-round-card a').contains(elem.HeadersText).click()
        cy.url().should('contain', Cypress.config().baseUrl+elem.navURLs)
        cy.get('.g-hero__text h1').should('be.visible')
    });
 });
 
 And('Verify images in The Truett Chick-fil-A page', (dataTable) => {
    dataTable.hashes().forEach((elem, index) => {
        cy.get('.img-wrapper').find('img').eq(index).then($getSrc => {
            const srcImage = $getSrc.attr('src')
            expect(srcImage).to.be.contains(elem.imageLinks)
        })        
    });
 })
