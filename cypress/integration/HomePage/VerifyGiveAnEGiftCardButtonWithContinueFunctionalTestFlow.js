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

And('Click on shop eGift Card button', ()=> {
    cy.get('.btn-container a')
      .contains('Shop eGift cards')
      .click()
});

And('Click on Give an eGift Card button', ()=> {
    cy.get('.btn-container a')
      .contains('Give an eGift Card')
      .click()
});

And('Verify Chick-fil-A pop up and click on Continue button', (dataTable)=> {
    cy.get('.actions').find('a').contains('Continue').should('be.visible')
    cy.get('.actions').find('a').contains('Continue').click()
});

Then('Verify the URL displayed', (dataTable)=> {
    // cy.get('#btnChooseNext1').should('be.visible')
    dataTable.hashes().forEach(elem => {
        cy.url().should('contain', elem.URLNavigation)
    });
});

Then('Verify the shop ecard url displayed', (dataTable)=> {
    cy.get('.btn-container .ewk-egift').should('contain','Purchase an eGift Card')
    dataTable.hashes().forEach(elem => {
        cy.url().should('contain', elem.URLNavigation)
    });
});