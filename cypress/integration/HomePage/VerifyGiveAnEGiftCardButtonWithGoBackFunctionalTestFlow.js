import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

And('Mousehover on the Chick-fil-A One Icon logo and and click it', ()=> {
    cy.get('.nav-frame .icon-logo-desktop ')
      .click({force:true})
    cy.wait(5000)
});

And('Verify Promo banner section Paragraphs', (dataTable) => {
    dataTable.hashes().forEach((elem, index) => {
        cy.get('.promo-banner .banner-link')
          .find('p')
          .eq(index)
          .should('contain', elem.ParagraphText)
    });
});

And('Click on Give an eGift Card button', ()=> {
    cy.get('.btn-container a')
      .contains('Give an eGift Card')
      .click()
});

And('Verify Chick-fil-A pop up section', (dataTable)=> {
    cy.get('.leaving-cfa .title').should('be.visible')
    cy.get('.actions').find('a').contains('Continue').should('be.visible')
});

And('Click on Go Back button', (dataTable)=> {
    cy.get('.actions').find('a').contains('Go back').click().should('not.exist', {timeout:8000})
});

Then('User should return back to the Home page', (dataTable)=> {
    // cy.get('.actions').find('a').contains('Go back').should('not.exists')
    dataTable.hashes().forEach(elem => {
        cy.url().should('contain', elem.URLNavigation)
    });
});

