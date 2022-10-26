import { When } from "cypress-cucumber-preprocessor/steps";

When(/^I search for "(.*)"$/, (str) => {
    if (str === "99501" || str === "30313" || str === "lab-201") {
        cy.get(':nth-child(2) > .current-location > button').forceClick()
        cy.get('#find-restaurants-modal > .content > .pwo-modal-search > .search-container > .user-input').type(`${str}`)
        cy.get('#find-restaurants-modal > .content > .pwo-modal-search > .btn-round').click()
        //cy.get(':nth-child(2) > .icon-search-off').click() //results in cypress whoops error
    } else {
        cy.get(':nth-child(2) > .current-location > button').forceClick()
        cy.get('#find-restaurants-modal > .content > .pwo-modal-search > .search-container > .user-input').type(`${str}`)
        cy.get('#find-restaurants-modal > .content > .pwo-modal-search > .btn-round').click()
        //cy.visit(`/locations/ga/${str}`)
    }
})