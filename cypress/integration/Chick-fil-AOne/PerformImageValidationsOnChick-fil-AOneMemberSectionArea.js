import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ChickfilAOne_PO, { chickfilAOne_PO } from '../../support/pageObjects/Chick-fil-AOnePO';

When('Mousehover on the Chick-fil-A Menu and click it', ()=> {
    cy.get('.cfa-one a')
      .contains('Chick-fil-A One')
      .trigger('mouseover')
      .click({force:true})
    cy.wait(5000)
});

And('Check each Image link validation on Chick-fil-A One Members section in Chick-fil-A One page', (dataTable)=> { 
  dataTable.hashes().forEach((elem, index) => {
    cy.get('.member-nav li').find('img').eq(index).then($getSrc => {
        const srcImage = $getSrc.attr('src')
        expect(srcImage).to.be.contains(elem.ImageLink)
    })        
});
});