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

// And('Click on Learn More button', ()=> {
//     cy.get('.g-tabs__inner a').eq(0).click()
// });

// And('Verify the Restaurant URL launched', (dataTable)=> {
//     dataTable.hashes().forEach(elem => {
//         cy.url().should('eq', elem.RestaurantsURL)
//     })
// });

// And('Click on "Start your search" button', ()=> {
//     cy.get('.btn--fullwidth-mobile').click()
// });

And('Click on Employee opportunities link', ()=> {
    cy.get('.accordion-body h2').eq(0).click()
    cy.get('.accordion-body>section>p a').click()
})

Then('User should navigate to Employement Opportunities page', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
        cy.url().should('eq', Cypress.config().baseUrl+elem.EmploymentOpportunityURL)
    })  
});

And('Verify the "Join Us" header in the Employment Opportunity Page', (dataTable)=> {
    cy.get('.header h2').should('contain','Join us')   
});