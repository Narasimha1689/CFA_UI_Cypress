import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ChickfilAOne_PO, { chickfilAOne_PO } from '../../support/pageObjects/Chick-fil-AOnePO';

When('Mousehover on the Chick-fil-A Menu and click it', ()=> {
    cy.get('.cfa-one a')
      .contains('Chick-fil-A One')
      .trigger('mouseover')
      .click({force:true})
    cy.wait(5000)
});

And('Click on the Chick-fil-A One Member link in Chick-fil-A One page', (dataTable)=> { 
    dataTable.hashes().forEach((elem, index) => {
        cy.get('.membership-tiers li')
          .find('.tier-descriptor span')
          .eq(index)
          .should('contain', elem.chickfilA_MemberLink)
          .click({force:true})
        })
});

Then('Check Paragraph validations on Chick-fil-A One Member link section', (dataTable)=> { 
    dataTable.hashes().forEach((elem, index) => {
        cy.get('.member-tier-benefits')
          .find('ul.basic-member li')
          .eq(index)
          .should('contain', elem.paragraphText)
        })
});