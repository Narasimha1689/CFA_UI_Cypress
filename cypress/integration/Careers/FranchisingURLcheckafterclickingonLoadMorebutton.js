import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"; 
// import { about_PO } from "../../support/pageObjects/AboutPO.js";


When('clicked on the Careers Menu', ()=> {
    cy.get('.main-nav li span').contains("Careers")
          .trigger('mouseover')
          .click()
});

And('Check for "At Chick-fil-A..." text header', ()=> {
    cy.get('.g-textblock h3').should('contain', 'At Chick-fil-A.')
});

And('Click on Franchising Navigation Tab', ()=> {
        cy.get('.g-tabs__nav div span').contains("Franchising").click()
});

And('Click on Learn More button in Franchising Navigation Tab', ()=> {
    cy.get('.g-tabs__inner a').eq(2).click()
});

Then('Verify the Franchising URL launched', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
        cy.url().should('eq', elem.FranchisingURL)
    })  
});

And('Verify the header text in Franchising page', ()=> {
    cy.get('.g-hero__text h1').should('contain', 'Franchising')
});

