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

And('Click on Explore the Menu button', ()=> {
    cy.homeButtonsClickFunc('Explore the menu')
    // cy.get('.btn-container a')
    //   .contains('Give an eGift Card')
    //   .click()
});

Then('Verify the URL Navigation', (dataTable)=> {
    cy.get('.menu-availability-callout h1').should('be.visible')
    dataTable.hashes().forEach(elem => {
        cy.url().should('contain', elem.URLNavigation)
    });
});