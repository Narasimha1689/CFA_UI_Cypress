import { And } from "cypress-cucumber-preprocessor/steps";

And('click on Order Pickup button on the local menu', () => {
    cy.get(`.p-details > .pdp-pwo-cta > .btn-container > [data-id="orderpickup"]`).click()
}); 

And('click on Order Delivery button on the local menu', () => {
    cy.get(`.p-details > .pdp-pwo-cta > .btn-container > [title="Order Delivery"]`).click()
});

And('I click on Order Pickup button on the Pop up', () => {
    cy.get('[alt="Order Pickup"]').click()
});

And('I click on Order Delivery button on the Pop up', () => {
    cy.get('[alt="van"]').click()
});