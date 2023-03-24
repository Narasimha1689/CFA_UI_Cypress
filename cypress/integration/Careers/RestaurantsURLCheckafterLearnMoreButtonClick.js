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

// And('Click on Restaurants Navigation Tab', ()=> {
//         cy.get('.g-tabs__nav div span').contains("Restaurants").click()
// });

And('Click on Learn More button', ()=> {
    cy.get('.content .vis-white').eq(0).click()
});

Then('Verify the Restaurant URL launched', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
        cy.get('.zipcode-search   h1',{timeout : 5000}).should('be.visible')
        cy.url().should('eq', Cypress.config().baseUrl+elem.RestaurantsURL)
    })
    
});