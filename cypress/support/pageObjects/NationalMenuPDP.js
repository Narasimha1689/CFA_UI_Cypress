class NationalMenuPDP {

    visit() {
        return cy.visit('/menu')
    }

    itemName() {
        cy.get('.p-details__h1')
    }

    click_orderPickUpBtn() {
        return cy.get(`.p-details > .pdp-pwo-cta > .btn-container > [data-id="orderpickup"]`).click()
    }

    click_orderDeliveryBtn() {
        return cy.get('.p-details > .pdp-pwo-cta > .btn-container > [href="/delivery"]').click()
    }

    click_cateringAvailableLink() {
        return cy.get('.p-details > .pdp-pwo-cta > [href="/orderfood"]').click()
    }

    click_showFullNutrition() {
        return cy.get('#showFullNutrition').click()
    }

}

export const nationalMenuPDP = new NationalMenuPDP();