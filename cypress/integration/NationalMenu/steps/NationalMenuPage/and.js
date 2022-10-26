import { And } from "cypress-cucumber-preprocessor/steps";
import { nationalMenuPage } from "../../../../support/pageObjects/NationalMenuPage";
import { nationalMenuPDP } from "../../../../support/pageObjects/NationalMenuPDP";

And('click on order now button under an item', () => {
    //nationalMenuPage.click_orderNowBtn()
    cy.get(`[data-item-tag="SANDWICH_CFA_CHICKEN"]`).click()
    cy.log('success')
})

And('click on {string} button', (btn) => {
    if (btn === 'Order Pickup') {
        cy.get(`.p-details > .pdp-pwo-cta > .btn-container > [data-id="orderpickup"]`).click()
    } else if (btn === 'Order Delivery') {
        cy.get('.p-details > .pdp-pwo-cta > .btn-container > [title="Order Delivery"]').click()
    }
})