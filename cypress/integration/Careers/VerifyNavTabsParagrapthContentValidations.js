import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
// import { about_PO } from "../../support/pageObjects/AboutPO.js";

When('clicked on the Careers Menu', ()=> {
    cy.get('.main-nav li span').contains("Careers")
          .trigger('mouseover')
          .click()
});

// And('Check for "At Chick-fil-A..." text header', ()=> {
//     cy.get('.g-textblock h3').should('contain', 'At Chick-fil-A.')
// });

And('check for Navigation tabs Paragraph Content', (dataTable)=> {
    dataTable.hashes().forEach(elem => {
        cy.get('.g-tabs__nav div span').contains(elem.navigationTabs).click()
        cy.get('.g-tabs__text p').should('contain', elem.navParagraphContent)
        //cy.get('.g-tabs__img img').should('have.attr','src', 'https://d1fd34dzzl09j.cloudfront.net/Images/CFACOM/Careers%20Images/restaurants-tab-new-image.png?h=633&w=825&la=en');
         
    })        
});

