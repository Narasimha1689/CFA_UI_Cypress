// import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

When('I click on the Inside ChickfilA section', ()=> {
    cy.get('#navitem-stories ul li a')
      .contains('Inside Chick-fil-A')
      .click({force:true})

});

And('Verify URL Navigation and Header Text in Stories Inside ChickfilA Page', (dataTable) => {
    dataTable.hashes().forEach(elem => {
    cy.get('.category-tagline h1').then($getHeaderText => {
        expect($getHeaderText.text().toLowerCase()).to.equal(elem.headerText)
    cy.url().should('include', elem.urlNavigation)
    });

    });
});

