import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"; 

When('clicked on the Careers Menu', ()=> {
    cy.get('.main-nav li span').contains("Careers")
          .trigger('mouseover')
          .click()
});

And('Check for "At Chick-fil-A..." text header', ()=> {
    cy.get('.g-textblock h3').should('contain', 'At Chick-fil-A.')
});

And('Click on LDP Navigation Tab', ()=> {
        cy.get('.g-tabs__nav div span').contains("LDP").click()
});

Then('Verify the Image displayed on LDP Navigation Tab', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
        cy.get('.g-tabs__inner').find('img').eq(3).then($getSrc => {
            const srcImage = $getSrc.attr('src')
            expect(srcImage).to.be.contains(elem.imageLink)
        })
        
    });
   
});