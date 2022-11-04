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

And('Click on Restaurants Navigation Tab', ()=> {
        cy.get('.g-tabs__nav div span').contains("Restaurants").click()
});

Then('Verify the Image displayed', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
        cy.log(elem.imageLink)
        cy.get('.g-tabs__inner img:first-child').then($getSrc => {
            const srcImage = $getSrc.attr('src')
            cy.log(srcImage)
            expect(srcImage).to.be.contains(elem.imageLink)
        })
        
    });
   
});
