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

And('Click on See Our Catering Menu button', ()=> {
    cy.homeButtonsClickFunc('See our catering menu')
});

And('Click on View Our Catering Menu button', ()=> {
    cy.get('.overlay-full-callout .message-container a')
      .should('contain','View catering menu')
      .click()
});

Then('Verify the URL NAvigation', (dataTable)=> {
    cy.get('.menu-hero-text  a').should('be.visible')
    dataTable.hashes().forEach(elem => {
        cy.url().should('contain', elem.URLNavigation)
    });
});

And('Verify the Nigation tabs displayed', (dataTable)=> {
    dataTable.hashes().forEach((elem, index) => {
        cy.get('.ms-inner a').eq(index).should('contain', elem.navigationTabs)
    });
});
