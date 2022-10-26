const { header } = require("../../support/pageObjects/Header")

When('I click on Find a Restaurant button', () => {
    header.click_FindARestaurant()
})

And('click on Search button', () => {
    cy.get('#find-restaurants-modal > .content > .pwo-modal-search > .btn-round')
        .click()
        
})

Then('I see all locations', () => {
    cy.checkPathName('/locations')
})