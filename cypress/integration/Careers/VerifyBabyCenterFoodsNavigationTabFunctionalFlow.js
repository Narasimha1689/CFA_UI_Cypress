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

And('Click on Baby Center Foods Navigation Tab', ()=> {
        cy.get('.g-tabs__nav div span').contains("Bay Center Foods ").click()
});

And('Verify the Image displayed on Baby Center Foods supply Navigation Tab', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
        // cy.log(elem.imageLink)
        cy.get('.g-tabs__inner').find('img').eq(6).then($getSrc => {
            const srcImage = $getSrc.attr('src')
            // cy.log(srcImage)
            expect(srcImage).to.be.contains(elem.imageLink)
        })
        
    });
   
});

And('Click on Learn More button in Baby Center Foods Navigation Tab', ()=> {
    cy.get('.g-tabs__inner a').eq(6).click()
});

And('Verify the Baby Center Foods URL launched', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
        cy.url().should('eq', elem.babyCenterURL)
    })  
});

And('Verify the header text in aby Center Foods page', ()=> {
    cy.get('.hero-controls-home h1').should('contain', 'Careers at Bay Center')
});
