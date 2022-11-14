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

And('Check Header line and Image in day part animated section in Home Page', ()=> {
    cy.get('.image-container .desktop-img').should('be.visible')
    cy.get('.wrapper h1').should('be.visible')
    cy.get('.wrapper h3').should('be.visible')
    cy.get('.wrapper .btn-container a').should('be.visible')
});
