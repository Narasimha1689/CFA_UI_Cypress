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

And('Click on Corporate Navigation Tab', ()=> {
        cy.get('.g-tabs__nav div span').contains("Corporate").click()
});

And('Verify the Image displayed on Corporate Navigation Tab', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
        // cy.log(elem.imageLink)
        cy.get('.g-tabs__inner').find('img').eq(1).then($getSrc => {
            const srcImage = $getSrc.attr('src')
            // cy.log(srcImage)
            expect(srcImage).to.be.contains(elem.imageLink)
        })
        
    });
   
});

And('Click on Learn More button in Corporate Navigation Tab', ()=> {
    cy.get('.g-tabs__inner a').eq(1).click()
});

And('Verify the Corporate URL launched', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
        cy.url().should('eq', elem.CorporateURL)
    })  
});

And('Verify the header text in Corporate page', ()=> {
    cy.get('.centered h2').eq(0).contains('Join Us at the Support Center')
});

