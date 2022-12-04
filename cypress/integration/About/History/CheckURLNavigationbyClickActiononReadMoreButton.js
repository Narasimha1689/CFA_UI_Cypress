import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

// Given('I am on the {} page', ()=> {
//     about_PO.NavigateToAboutSubMenuURL("Giving Back")
// });

And('Check Header Text in History page', () => {
    cy.get('#truett_intro h1').then($getHeaderText => {
        expect($getHeaderText.text().toLowerCase()).to.equal('history')
    })
});

Then('Click on Read More link', ()=> {
    cy.get('#a_deep_love_for_customers a')
      .scrollIntoView()
      .click({force:true})
});

And('Verify the URL Launched', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
        cy.url().should('contain', elem.humbleBeginningsURL)
    });
    cy.get('.article-details h1').should('be.visible')          
});

Then('Verify Image validation in Humble Beginnings page', (dataTable) => {
    dataTable.hashes().forEach(elem => {
        cy.get('.captionedImage').find('img').then($getSrc => {
            const srcImage = $getSrc.attr('src')
            expect(srcImage).to.be.contains(elem.imgSrc)
        })
    });
});

Then('Click on cfa-stories section and verify the new URL Launched', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
        cy.get('.flex .cfa-stories a').eq(2).click()
        cy.url().should('contain',elem.celebratingTruett)
    })
    cy.get('.article-details h1').should('contain','Celebrating Truett on his 100th Birthday')
});
