import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

And('Mousehover on the Chick-fil-A One Icon logo and and click it', ()=> {
    cy.get('.nav-frame .icon-logo-desktop ')
      .click({force:true})
    cy.wait(5000)
});

Then('Verify Promo banner section Image', (dataTable)=> {    
    dataTable.hashes().forEach(elem => {
        cy.get('.promo-banner .banner-link').find('img').then($getSrc => {
            const srcImage = $getSrc.attr('src')
            expect(srcImage).to.be.contains(elem.ImageLink)
        });       
    });
});

And('Verify Promo banner section Paragraphs', (dataTable) => {
    dataTable.hashes().forEach((elem, index) => {
        cy.get('.promo-banner .banner-link')
          .find('p')
          .eq(index)
          .should('contain', elem.ParagraphText)
    });
});

And('Click on the Sign Up button', ()=> {
    cy.get('.arrow-link a')
      .click()
});

Then('Verify the URL Navigations', (dataTable)=> {
    // cy.get('.generic-text-panel .wrapper').find('a').should('be.visible')

    dataTable.hashes().forEach(elem => {
        cy.url().should('contain', elem.URLNavigation)
    });

});