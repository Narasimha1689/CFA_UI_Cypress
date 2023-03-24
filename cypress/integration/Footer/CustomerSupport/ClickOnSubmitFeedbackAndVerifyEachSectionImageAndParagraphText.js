import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

And('Verify Footer section is visible or not', ()=> {
    cy.get('.footer', {timeout : 5000})
      .should('be.visible')
});

Then('Check Header Text and URL Navigation by clicking on Customer Support link in Footer Section', (dataTable) => {
  dataTable.hashes().forEach(elem => {
      cy.get('.footer-nav li')
      .find('a')
      .contains('Customer Support')
      .click()

      cy.get('.customer-support-search-header h1').should('contain', elem.headerText)
      cy.url().should('include',Cypress.config().baseUrl+elem.urlNavigation)
  });
});

And('Click on Submit Feedback', ()=> {
    cy.get('.still-have-question__cta a')
      .contains('Submit feedback')
      .click()
});

Then('Verify URL validation', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
    cy.get('#lll-content').should('be.visible')
    cy.url().should('include', Cypress.config().baseUrl+elem.urlNavigation)
    });
})

And('Verify Each section image and paragraph text', (dataTable)=> {
    dataTable.hashes().forEach((elem, index) => {
        cy.get('.single').find('img').eq(index).then($getSrc => {
            const srcImage = $getSrc.attr('src')
            expect(srcImage).to.be.contains(elem.imageLink)
        })

        cy.get('.single').find('p').eq(index).should('contain', elem.paragraphText)
        
    });
})