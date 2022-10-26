import { localMenuPage } from '../../support/pageObjects/LocalMenuPage.js'

When('I click on an item on the menu', () => {
    localMenuPage.click_chickenSandwich()
})

And('click on {string} button', (btn) => {
    if (btn === 'Order Pickup') {
        cy.get('.p-details > .pdp-pwo-cta > .btn-container > [href="https://order.chick-fil-a.com/location?locationNumber=00070&amp;itemTag=SANDWICH_CFA_CHICKEN"]').click()
    } else if (btn === 'Order Delivery') {
        cy.get('.p-details > .pdp-pwo-cta > .btn-container > [href="/delivery"]').click()
    }
})

Then('I am not asked to enter location', () => {
    cy.get('h1').should('contain', 'How would you like to receive your order?')
})