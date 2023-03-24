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

// And('Click on Licensing Navigation Tab', ()=> {
//         cy.get('.g-tabs__nav div span').contains("Licensing").click()
// });

// And('Click on Learn More button in Licensing Navigation Tab', ()=> {
//     cy.get('.g-tabs__inner a').eq(4).click()
// });

// And('Verify the Licensing URL launched', (dataTable)=> {
//     dataTable.hashes().forEach(elem => {
//         cy.url().should('eq', Cypress.config().baseUrl+elem.LicensingURL)
//     })  
// });

Then('Verify the header text in Licensing page', ()=> {
    cy.get('.wrapper h1').should('contain', 'Licensing Information and Opportunities')
});
