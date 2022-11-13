import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ChickfilAOne_PO, { chickfilAOne_PO } from '../../support/pageObjects/Chick-fil-AOnePO';

When('Mousehover on the Chick-fil-A Menu and click it', ()=> {
    cy.get('.cfa-one a')
      .contains('Chick-fil-A One')
      .trigger('mouseover')
      .click({force:true})
    cy.wait(5000)
});

And('Click on the Chick-fil-A One Red Member link in Chick-fil-A One page', (dataTable)=> { 
    
  dataTable.hashes().forEach(elem => {

    cy.get('.membership-tiers li')
      .find('.tier-descriptor span')
      .each(($e1, index, elist) => {
    // cy.log(index+":"+$e1.text())

    if($e1.text().includes(elem.chickfilA_RedMemberLink)){
      cy.wrap($e1).click()
    }
  })
})
});

Then('Check Paragraph validations on Chick-fil-A One Red Member link section', (dataTable)=> { 
    dataTable.hashes().forEach((elem, index) => {
        cy.get("ul.red-member")
          .find('li')
          .eq(index)
          .should('contain', elem.paragraphText)
        })
});