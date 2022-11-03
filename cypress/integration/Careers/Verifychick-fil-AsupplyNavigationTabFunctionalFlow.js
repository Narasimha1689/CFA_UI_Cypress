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

And('Click on Chick-fil-A supply Navigation Tab', ()=> {
        cy.get('.g-tabs__nav div span').contains("Chick-fil-A Supply").click()
});

And('Verify the Image displayed on Chick-fil-A supply Navigation Tab', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
        // cy.log(elem.imageLink)
        cy.get('.g-tabs__inner').find('img').eq(5).then($getSrc => {
            const srcImage = $getSrc.attr('src')
            // cy.log(srcImage)
            expect(srcImage).to.be.contains(elem.imageLink)
        })
        
    });
   
});

And('Click on Learn More button in Chick-fil-A supply Navigation Tab', ()=> {
    cy.get('.g-tabs__inner a').eq(5).click()
});

And('Verify the Chick-fil-A supply URL launched', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
        cy.url().should('eq', elem.chickfilURL)
    })  
});

And('Verify the header text in Chick-fil-A supply page', ()=> {
    cy.get('.section-header h2').should('have.text', 'A business built to serve')
});

And('Click on Our Service button and verify the url launched', (dataTable)=> {
    cy.get('.w-inline-block div').contains('Our Service').click()
    dataTable.hashes().forEach(elem => {
        cy.url().should('eq', elem.ourServiceURL)
    })  
    cy.get('.section-header h2').first().contains('Opportunities to serve')
    cy.go('back')
});

And('Click on Our Team button and verify the url launched', (dataTable)=> {
    cy.get('.w-inline-block div').contains('Our Team').click()
    dataTable.hashes().forEach(elem => {
        cy.url().should('eq', elem.ourTeamURL)
    })  
    cy.get('.section-header h2').first().contains('We take care of each other')
    cy.go('back')
});

And('Click on Our Growth button and verify the url launched', (dataTable)=> {
    cy.get('.w-inline-block div').contains('Our Growth').click()
    dataTable.hashes().forEach(elem => {
        cy.url().should('eq', elem.ourGrowthURL)
    })  
    cy.get('.section-header h2').first().contains('Innovating to support growth')
});