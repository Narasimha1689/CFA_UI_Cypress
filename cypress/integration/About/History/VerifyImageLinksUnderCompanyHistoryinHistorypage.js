import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { about_PO } from "../../../support/pageObjects/AboutPO.js";

// Given('I am on the {} page', ()=> {
//     about_PO.NavigateToAboutSubMenuURL("Giving Back")
// });

And('Check Header Text in History page', () => {
    cy.get('#truett_intro h1').then($getHeaderText => {
        expect($getHeaderText.text().toLowerCase()).to.equal('history')
    })
});

Then('Check Image links under company history in History page', (dataTable) => {
    dataTable.hashes().forEach((elem, index) => {
        cy.get('.history-module').find('img').eq(index).then($getSrc => {
            const srcImage = $getSrc.attr('src')
            expect(srcImage).to.be.contains(elem.imageLinks)
        })        
    });
 });
 
