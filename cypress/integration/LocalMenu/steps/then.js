import { Then } from "cypress-cucumber-preprocessor/steps";

Then(/^I am navigated to "(.*)" page$/, (str) => {
    if (str === 'pickup PWO') {
        cy.url().should('include', 'itemTag=SANDWICH_CFA_CHICKEN')
       
    } else if (str === 'delivery') {
        cy.url().should('include', '/delivery')
    } else {
        cy.log('Something went wrong when navigating pages!')
    }
})