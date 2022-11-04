import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
// import { about_PO } from "../../support/pageObjects/AboutPO.js";

When('clicked on the Careers Menu', ()=> {
    cy.get('.main-nav li span').contains("Careers")
          .trigger('mouseover')
          .click()
});

And('Check for "At Chick-fil-A..." text header', ()=> {
    cy.get('.g-textblock h3').should('contain', 'At Chick-fil-A.')
});

And('Click on Navigation Tabs and verify the HeaderText', (dataTable)=> {
    // cy.log('raw : ' + dataTable.raw());
    // cy.log('rows : ' + dataTable.rows());
    dataTable.hashes().forEach(ele => {
        // for(var propName in elem) {
        //     cy.log(elem[propName])
        // }
        cy.get('.g-tabs__nav div span').contains(ele.nav_Item).click()
        cy.get('.g-tabs__text h4').should('contain', ele.HeaderText);
        
});

});