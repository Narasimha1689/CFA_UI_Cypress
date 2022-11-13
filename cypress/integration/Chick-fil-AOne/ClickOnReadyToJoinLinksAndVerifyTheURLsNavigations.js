import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ChickfilAOne_PO, { chickfilAOne_PO } from '../../support/pageObjects/Chick-fil-AOnePO';

When('Mousehover on the Chick-fil-A Menu and click it', ()=> {
    cy.get('.cfa-one a')
      .contains('Chick-fil-A One')
      .trigger('mouseover')
      .click({force:true})
    cy.wait(5000)
});

And('check URL navigations after clicking on Ready To Join links in Chick-fil-A One page', (dataTable)=> {
    
    dataTable.hashes().forEach((elem, index) => {
        cy.get('.flex-wrapper h4')
          .find('a')
          .eq(index)
          .should('contain', elem.readyToJoinLinks)
          .click({force:true})

          cy.url().should('contain',elem.urlValidation)
          cy.get("h2[class='toggle active'][aria-expanded='true']").should('be.visible')
          cy.go('back')
        })
});