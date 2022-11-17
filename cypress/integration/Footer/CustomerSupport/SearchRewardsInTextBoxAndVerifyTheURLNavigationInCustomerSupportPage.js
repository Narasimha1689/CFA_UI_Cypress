import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

And('Verify Footer section is visible or not', ()=> {
    cy.get('.footer', {timeout : 5000})
      .should('be.visible')
});

Then('Check Header Text and URL Navigation by clicking on Customer Support link in Footer Section', (dataTable) => {
    dataTable.hashes().forEach(elem => {
        cy.get('.footer-nav li')
        .find('a')
        .contains('Customer Support')
        .click()

        cy.get('.customer-support-search-header h1').should('contain', elem.headerText)
        cy.url().should('include',elem.urlNavigation)
    });
});

And('Search Rewards in Text box field and click on Enter', (dataTable) => {
    dataTable.hashes().forEach(elem => {
        cy.get('#yxt-SearchBar-input--search-form-customer-support')
          .click()
          .type(elem.searchText)
    });

    // cy.wait(3000)
    cy.get('button.js-yext-submit', {timeout : 3000})
      .eq(1)
      .should('be.visible')
      .click({force : true})
});

And('Verify the URL navigations', (dataTable) => {
    dataTable.hashes().forEach(elem => {        
        cy.get('.still-have-question__cta a').should('be.visible')

        cy.url().should('contain', elem.rewarsUrlNavigation)
    });
});

Then('Click on the first ques and verify the URL Navigation', (dataTable) => {
    dataTable.hashes().forEach(elem => {
        cy.get('iframe').find("div[class='HitchhikerStandard-title'] a")
          .eq(0)
          .click({force:true})

        cy.get('.customer-support-search-header p')
          .should('contain', 'here to help')
        cy.url().should('contain', elem.firstQuesURLNavigation)
    });
})