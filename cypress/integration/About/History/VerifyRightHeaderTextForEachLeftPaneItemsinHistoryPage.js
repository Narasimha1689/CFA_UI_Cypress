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

Then('Check Header Text displayed on right for each left pane navigation items', (dataTable) => {
    dataTable.hashes().forEach((elem, index) => {
        cy.get('.history-toggle li').find('a').eq(index).then($getElemText => {
            const getElemText = $getElemText.text()
            if(getElemText.includes(elem.leftPaneNavItems)) {
                cy.wrap(getElemText).click
                cy.get('.history-module .content', {timeout : 3000}).find('h3').eq(index).should('contain', elem.rightSideHeaderText)
            }
        })             
    });
 });
 
