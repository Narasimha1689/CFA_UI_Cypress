Then('all components are correctly present for {string}', (page) => {
    cy.wait(1000)
    cy.eyesCheckWindow(page)
})

Then(/^I am navigated to "(.*)" page$/, (str) => {
    if (str === 'PWO') {
        cy.eyesCheckWindow('.CA order pickup PWO page')
        cy.get('h1')
            .should('contain', 'How would you like to receive your order?')
    } else if (str === 'pickup PWO') {
        cy.eyesCheckWindow('.COM order pickup PWO page')
        cy.get('#location-search-form-header')
            .should('contain', 'Start a carry-out, curbside or drive-thru pickup order')
    } else if (str === 'delivery') {
        // PWO redirect has not been set up yet
        cy.eyesCheckWindow('Delivery page')
        cy.checkPathName('/delivery')
        cy.get('.delivery-lookup > :nth-child(1) > :nth-child(1) > h1')
            .should('contain', 'Enter your address to see')
    } else {
        cy.log('Something went wrong when navigating pages!')
    }
})