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
//         cy.url().should('eq', elem.LicensingURL)
//     })  
// });

And('Verify the header text in Licensing page', ()=> {
    cy.get('.wrapper h1').should('contain', 'Licensing Information and Opportunities')
});

And('Click on Apply now link in Licensing screen', ()=> {
    cy.get('.wrapper a').contains('Apply now').click()
    cy.pause()
});

And('Verify the URL launched and element validation', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
        cy.url().should('eq', Cypress.config().baseUrl+elem.applyNowPageURL)
    }) ;
    cy.get("button[type='submit']").should('be.visible')
});

And('Click on franchise opportunities link', ()=> {
    cy.get('.intro a').invoke('removeAttr', 'target').click()
});

Then('verify user navigated to franchise screen URL', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
        cy.url().should('eq', Cypress.config().baseUrl+elem.franchiseScreenURL)
    }) ;
});

And('Verify and play the video', ()=> {
    cy.get('.g-video__play-btn svg').eq(0).click({force:true})
});

Then('Verify the images count on franchise screen', ()=> {
    cy.get('.icon img:visible').should('have.length', '4')
});

