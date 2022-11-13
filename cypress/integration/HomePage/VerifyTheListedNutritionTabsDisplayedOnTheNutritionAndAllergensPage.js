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

Then('Click on Learn More button and Verify the URL Navigation', (dataTable)=> {
    cy.homeButtonsClickFunc('Learn more')
    cy.get('#nutrition-and-allergens h1', {timeout:5000}).should('be.visible')
    dataTable.hashes().forEach(elem => {
        cy.url().should('contain', elem.URLNavigation)
    });
});

And('Verify the listed Nutrition tabs displayed on the Nutrition and Allergens page', (dataTable)=> {
    dataTable.hashes().forEach((elem, index) => {
        cy.get('#nutrition-table-anchors li')
          .find('a')
          .eq(index)
          .should('contain', elem.NutritionTabs)
    });
});
