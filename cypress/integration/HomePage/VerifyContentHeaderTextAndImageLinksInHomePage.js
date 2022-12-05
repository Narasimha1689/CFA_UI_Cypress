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

Then('Check Content Header text and Image Links in Home Page', (dataTable)=> {
    dataTable.hashes().forEach((elem, index) => {
        // cy.get('.flex-wrapper .content h4').eq(index).then($contentHeaderText => {
            cy.get("[class='classic-callout grid-layout white-card card-classic'] .title-text h2")
              .eq(index)
              .then($contentHeaderText => {
            expect($contentHeaderText.text()).to.be.contains(elem.ContentHeaderText)
        }) 
        
        // cy.get('.flex-wrapper .desktop-img').eq(index).then($getSrc => {
        cy.get("[class='classic-callout grid-layout white-card card-classic'] div.img-container img.desktop-img")
          .eq(index)
          .then($getSrc => {
            const srcImage = $getSrc.attr('src')
            expect(srcImage).to.be.contains(elem.ImageLinks)
        }) 
    });
});

And('Check Header line in each section in Home Page', (dataTable)=> {
    dataTable.hashes().forEach((elem, index) => {
        cy.get('.flex-wrapper .content .headline').eq(index).then($HeaderLineText => {
            expect($HeaderLineText.text()).to.be.contains(elem.headerLineText)
        }); 
    });
});

Then('Check Paragraph in each section in Home Page', (dataTable)=> {
    dataTable.hashes().forEach((elem, index) => {
        cy.get('.flex-wrapper .content p').eq(index).then($paragraphText => {
            expect($paragraphText.text()).to.be.contains(elem.paragraphText)
        });
    });
});