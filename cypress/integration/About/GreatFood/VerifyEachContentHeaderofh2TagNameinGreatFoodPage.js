import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { about_PO } from "../../../support/pageObjects/AboutPO.js";

Given('I am on the {} page', ()=> {
    about_PO.NavigateToAboutSubMenuURL("Great Food")
});

And('Verify Great Food Header Text Page in Great Food page', () => {
    cy.get('.hero-text-block h1').first().then($getHeaderText => {
        expect($getHeaderText.text().toLowerCase()).to.equal('great food')
    })
});

And('Verify each Content Header of h2 tags in Great Food page', (dataTable) => {
    dataTable.hashes().forEach((elem, index) => {
        cy.get('.content h2:visible').eq(index).then($contentHeaderText => {
            // const srcImage = $getSrc.attr('src')
            expect($contentHeaderText.text()).to.be.contains(elem.greatFoodh2ContentHeader)
        })        
    });
});


