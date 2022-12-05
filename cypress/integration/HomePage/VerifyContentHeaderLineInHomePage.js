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

And('Check Header line in each section in Home Page', (dataTable)=> {
    dataTable.hashes().forEach((elem, index) => {
        // cy.get('.flex-wrapper .content .headline').eq(index).then($HeaderLineText => {
            cy.get("[class^='classic-callout grid-layout white-card'] .icon-container p")
              .eq(index)
              .then($HeaderLineText => {
            expect($HeaderLineText.text()).to.be.contains(elem.headerLineText)
        }); 
    });
});
