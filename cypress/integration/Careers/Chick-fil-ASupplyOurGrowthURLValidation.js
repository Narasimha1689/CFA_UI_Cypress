import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"; 

When('clicked on the Careers Menu', ()=> {
    cy.get('.main-nav li span').contains("Careers")
          .trigger('mouseover')
          .click()
});

And('Check for "At Chick-fil-A..." text header', ()=> {
    cy.get('.wrapper h1').should('contain', 'Chick-fil-A')
});

// And('Click on Chick-fil-A supply Navigation Tab', ()=> {
//         cy.get('.g-tabs__nav div span').contains("Chick-fil-A Supply").click()
// });

And('Click on Learn More button in Chick-fil-A supply Navigation Tab', ()=> {
    cy.get('.content .vis-white').eq(5).click()
});

Then('Verify the Chick-fil-A supply URL launched', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
        cy.url().should('eq', elem.chickfilURL)
    })  
});

And('Verify the header text in Chick-fil-A supply page', ()=> {
    cy.get('.section-header h2').should('have.text', 'A business built to serve')
});

Then('Click on Our Growth button and verify the url launched', (dataTable)=> {
    cy.get('.w-inline-block div').contains('Our Growth').click()
    dataTable.hashes().forEach(elem => {
        cy.url().should('eq', elem.ourGrowthURL)
    })  
    cy.get('.section-header h2').first().contains('Innovating to support growth')
});