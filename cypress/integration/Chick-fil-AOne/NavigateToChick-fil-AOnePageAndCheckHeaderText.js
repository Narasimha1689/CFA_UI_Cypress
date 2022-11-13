import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import ChickfilAOne_PO, { chickfilAOne_PO } from '../../support/pageObjects/Chick-fil-AOnePO';

When('Mousehover on the Chick-fil-A Menu and click it', ()=> {
    // chickfilAOne_PO.clickOnChickfilAOneMenu().click({force:true})
    cy.get('.cfa-one a')
      .contains('Chick-fil-A One')
      .trigger('mouseover')
      .click({force:true})
    // cy.get('.three-column-with-headline h2', {timeout : 6000}).should('contain','How does Chick-fil-A One').should('be.visible')
    cy.wait(5000)
});

And('Verify User landed in Chick-fil-A page by Header check and Image check', (dataTable)=> {
    
    dataTable.hashes().forEach(elem => {
        // const iFrame = cy.get('#LocationFrameId')
        // .its('0.document.body')
        // .should('be.visible')
        // .then(cy.wrap)
    
        // iFrame.find('h1').should('contain', elem.HeaderText)
        // iFrame.find('h1').should('contain', elem.ParagraphText)
        // iFrame.find('h1').should('contain', elem.ImageLink)
        chickfilAOne_PO.chickfilAOneHeaderText(elem.HeaderText)
        chickfilAOne_PO.chickfilAOneParagraphText(elem.ParagraphText)
        chickfilAOne_PO.chickfilAOneImageLinkVerification(elem.ImageLink)     
    })
});