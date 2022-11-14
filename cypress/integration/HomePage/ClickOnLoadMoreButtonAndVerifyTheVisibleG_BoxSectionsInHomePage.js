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

And('Verify visible g_box sections in Home Page', ()=> {
    cy.get('.g-boxes .g-boxes__box').should('have.length',3)
})

Then('Click on Load More button and Verify visible g_box sections in Home Page', ()=> {
    cy.get('#careers-show-more-related-stories-btn').click()

    cy.wait(5000)

    cy.get('.g-boxes .g-boxes__box').should('have.length',9)
   });

