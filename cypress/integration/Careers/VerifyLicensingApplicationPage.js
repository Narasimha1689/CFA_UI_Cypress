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

And('Click on Licensing Navigation Tab', ()=> {
        cy.get('.g-tabs__nav div span').contains("Licensing").click()
});

And('Verify the Image displayed on Licensing Navigation Tab', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
        // cy.log(elem.imageLink)
        cy.get('.g-tabs__inner').find('img').eq(4).then($getSrc => {
            const srcImage = $getSrc.attr('src')
            // cy.log(srcImage)
            expect(srcImage).to.be.contains(elem.imageLink)
        })
        
    });
   
});

And('Click on Learn More button in Licensing Navigation Tab', ()=> {
    cy.get('.content .vis-white').eq(4).click()
});

And('Verify the Licensing URL launched', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
        cy.url().should('eq', Cypress.config().baseUrl+elem.LicensingURL)
    })  
});

And('Verify the header text in Licensing page', ()=> {
    cy.get('.wrapper h1').should('contain', 'Licensing Information and Opportunities')
});

And('Click on Apply now link in Licensing screen', ()=> {
    cy.get('.wrapper a').contains('Apply now').click()
});

Then('Verify the Licensing Application URL launched and element validation', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
        cy.url().should('eq', Cypress.config().baseUrl+elem.applyNowPageURL)
    }) ;
    cy.get("button[type='submit']").should('be.visible')
});