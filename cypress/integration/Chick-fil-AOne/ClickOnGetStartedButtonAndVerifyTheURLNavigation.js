import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ChickfilAOne_PO, { chickfilAOne_PO } from '../../support/pageObjects/Chick-fil-AOnePO';

When('Mousehover on the Chick-fil-A Menu and click it', ()=> {
    cy.get('.cfa-one a')
      .contains('Chick-fil-A One')
      .trigger('mouseover')
      .click({force:true})
    cy.wait(5000)
});

And('Click on Get Started button in Chick-fil-A One Page', ()=> { 
    cy.get('.btn-container')
      .find('a')
      .contains('Get started')
      .click()
});

Then('Check the URL Navigation after clicking on Get Started button', (dataTable)=> { 
  dataTable.hashes().forEach(elem => {
    cy.url().should('contain',elem.urlNavigation)
   });
});
