import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ChickfilAOne_PO, { chickfilAOne_PO } from '../../support/pageObjects/Chick-fil-AOnePO';

When('Mousehover on the Chick-fil-A Menu and click it', ()=> {
    cy.get('.cfa-one a')
      .contains('Chick-fil-A One')
      .trigger('mouseover')
      .click({force:true})
    cy.wait(5000)
});

And('click on Here link and verify functional flow', ()=> { 
    cy.get('.generic-text-panel .wrapper').find('a').click()
});

Then('Verify the URL Navigations', (dataTable)=> { 
  cy.get('#LocationFrameId h1').should('be.visible')
  dataTable.hashes().forEach(elem => {
    cy.url().should('contain',elem.urlNavigation)
   });
   cy.get('#LocationFrameId h1').should('contain', 'Customer Support')
});

And('Verify the Customer Support quick images links', (dataTable)=> { 
  dataTable.hashes().forEach((elem, index) => {
    cy.get('#LocationFrameId .customer-support-quick-links').find('img').eq(index).then($getSrc => {
        const srcImage = $getSrc.attr('src')
        expect(srcImage).to.be.contains(elem.ImageLink)
    })        
});
});