import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { about_PO } from "../../../support/pageObjects/AboutPO.js";

// Given('I am on the {} page', ()=> {
//     about_PO.NavigateToAboutSubMenuURL("Great Food")
// });

And('Verify Great Food Header Text Page in Great Food page', () => {
    cy.get('.hero-text-block h1').first().then($getHeaderText => {
        expect($getHeaderText.text().toLowerCase()).to.equal('great food')
    })
});

And('Verify each Image link in Great Food page', (dataTable) => {
    dataTable.hashes().forEach((elem, index) => {
        cy.get('.img picture').find('img').eq(index).then($getSrc => {
            const srcImage = $getSrc.attr('src')
            expect(srcImage).to.be.contains(elem.greatFoodImageLinks)
        })        
    });
});


