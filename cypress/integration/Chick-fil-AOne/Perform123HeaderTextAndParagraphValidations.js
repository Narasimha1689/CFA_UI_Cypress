import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ChickfilAOne_PO, { chickfilAOne_PO } from '../../support/pageObjects/Chick-fil-AOnePO';

When('Mousehover on the Chick-fil-A Menu and click it', ()=> {
    // chickfilAOne_PO.clickOnChickfilAOneMenu().click({force:true})
    cy.get('.cfa-one a')
      .trigger('mouseover')
      .click({force:true})
    cy.wait(5000)
    // cy.get('.wrapper h2', {timeout : 8000}).should('contain','Still have questions?').should('be.visible')
});

And('check 123 sections Header Text and Paragraph Text in Chick-fil-A One page', (dataTable)=> {
    dataTable.hashes().forEach((elem, index) => {
        chickfilAOne_PO.chickfilAOne123SectionHeaderText(elem.HeaderText, index)
        chickfilAOne_PO.chickfilAOne123SectionParagraphText(elem.ParagraphText, index)
    })
});