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

And('Click on Franchising Navigation Tab', ()=> {
        cy.get('.g-tabs__nav div span').contains("Franchising").click()
});

And('Verify the Image displayed on Franchising Navigation Tab', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
        // cy.log(elem.imageLink)
        cy.get('.g-tabs__inner').find('img').eq(2).then($getSrc => {
            const srcImage = $getSrc.attr('src')
            // cy.log(srcImage)
            expect(srcImage).to.be.contains(elem.imageLink)
        })
        
    });
   
});

And('Click on Learn More button in Franchising Navigation Tab', ()=> {
    cy.get('.g-tabs__inner a').eq(2).click()
});

And('Verify the Franchising URL launched', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
        cy.url().should('eq', elem.FranchisingURL)
    })  
});

And('Verify the header text in Franchising page', ()=> {
    cy.get('.g-hero__text h1').should('contain', 'Franchising')
});

And('Verify the images count displayed in the Franchising Page', ()=> {
    cy.get('.img-wrapper').find('img:visible').should('have.length','8')
});

