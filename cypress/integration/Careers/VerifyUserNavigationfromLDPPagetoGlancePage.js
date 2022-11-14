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

And('Click on LDP Navigation Tab', ()=> {
        cy.get('.g-tabs__nav div span').contains("LDP").click()
});

And('Click on Learn More button in LDP Navigation Tab', ()=> {
    cy.get('.g-tabs__inner a').eq(3).click()
});

Then('Verify the LDP URL launched', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
        cy.url().should('eq', elem.LDPURL)
    })  
});

And('Verify the header text in LDP page', ()=> {
    cy.get('.wrapper h1').should('contain', 'Leadership Development Program')
});

And('Click on Learn More link in LDP screen', ()=> {
    cy.get('.no-dotted a').first().click()
});

Then('Verify the URL launched and element validation in glance page', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
        cy.url().should('eq', elem.glancePageURL)
    }) ;
    cy.get('.wrapper h1').should('contain','Program at a glance')
});

And('Verify the images count on glance screen', ()=> {
    cy.get('.fact  img').should('have.length', 6)
});
