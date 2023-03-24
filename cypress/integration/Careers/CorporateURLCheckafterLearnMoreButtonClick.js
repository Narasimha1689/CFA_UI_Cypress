import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"; 
// import { about_PO } from "../../support/pageObjects/AboutPO.js";


When('clicked on the Careers Menu', ()=> {
    cy.get('.main-nav li span').contains("Careers")
          .trigger('mouseover')
          .click()
});

// And('Check for "At Chick-fil-A..." text header', ()=> {
//     cy.get('.g-textblock h3').should('contain', 'At Chick-fil-A.')
// });

// And('Click on Corporate Navigation Tab', ()=> {
//         cy.get('.g-tabs__nav div span').contains("Corporate").click()
// });

And('Click on Learn More button in Corporate Navigation Tab', ()=> {
    cy.get('.content .vis-white').eq(1).click()
});

Then('Verify the Corporate URL launched', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
        cy.url().should('eq', Cypress.config().baseUrl+elem.CorporateURL)
    })  
});

Then('Verify the header text in Corporate page', ()=> {
    cy.get('.centered h2').eq(0).contains('Join Us at the Support Center')
});

