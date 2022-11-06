import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { about_PO } from "../../../support/pageObjects/AboutPO.js";

Given('I am on the {} page', ()=> {
    about_PO.NavigateToAboutSubMenuURL("Giving Back")
});

And('Verify Giving Back Header Text Page', () => {
    cy.get('#truett_intro h1').first().then($getHeaderText => {
        expect($getHeaderText.text().toLowerCase()).to.equal('giving back')
    })
});

Then('Check Image links in Giving Back page', (dataTable) => {
    dataTable.hashes().forEach((elem, index) => {
        cy.get('.co-full-img picture').find('img').eq(index).then($getSrc => {
            const srcImage = $getSrc.attr('src')
            expect(srcImage).to.be.contains(elem.imageLinks)
        })        
    });
 });
 
