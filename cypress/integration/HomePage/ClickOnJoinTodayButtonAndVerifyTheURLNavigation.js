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

Then('Click on Join Today button and check the URL NAvigation', (dataTable)=> {
    // cy.homeButtonsClickFunc('Join today')
    cy.get("[class$='white-card card-classic'] .message-container a")
      .eq(1)
      .click()

    cy.wait(5000)
    cy.get('.btn-container').find('a').contains('Get started').should('be.visible')

    dataTable.hashes().forEach(elem => {
        cy.url().should('contain', elem.URLNavigation)
    });
});

