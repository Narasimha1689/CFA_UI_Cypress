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
      cy.url().should('include',elem.urlNavigation)
  });
});

And('Verify URL Navigation flow after clicking on Suspicious Activity section', (dataTable) => {
    dataTable.hashes().forEach((elem, index) => {
        cy.get('.customer-support-quick-links')
        .find('img')
        .eq(index)
        .click()

        cy.get('.question-subcategory-list')
          .find('p')
          .eq(index)
          .should('contain', elem.headerTextSP)
        
        cy.url().should('contain', elem.sp_URLNavigation)
    });
});

Then('Click on the First Question link', () => {
      cy.get('.question__item-link')
        .eq(0)
        .click({force:true})
});

And('Verify the URL Navigation', (dataTable) => {
  dataTable.hashes().forEach(elem => {
    cy.get('.still-have-question__cta a').should('be.visible')    
    cy.url().should('contain', elem.urlNavigation)
});
});

Then('Verify ParagraphText after clicking on First Question', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
        cy.get('.question-details__answer li').eq(0).should('contain', elem.paragraphText)    
        // cy.get('.desktop-img').should('contain', elem.imageLink)
    });
})