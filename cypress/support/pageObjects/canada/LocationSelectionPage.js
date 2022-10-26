class LocationSelectionPage {
    url() {
        return cy.visit('/locations')
    }

    click_yongeDirectionsBtn() {
        // return cy.get(`:nth-child(1) > .g-round-card > .g-round-card__inner > 
        //     .g-round-card__content > .g-round-card__foot > .btn-round--white`).click()
        return cy.get('.g-card-grid').eq(0).contains('Get directions').click()
    }

    click_yongeViewMenuBtn() {
        return cy.get('[href="/locations/on/yonge-and-bloor-in-line/menu"]').click()
    }

    click_yorkDirectionsBtn() {
        // return cy.get(`:nth-child(2) > .g-round-card > .g-round-card__inner > 
        //     .g-round-card__content > .g-round-card__foot > .btn-round--white`).click()
        return cy.get('.g-card-grid').eq(1).contains('Get directions').click()
    }

    click_yorkViewMenuBtn() {
        return cy.get(`:nth-child(2) > .g-round-card > .g-round-card__inner > 
            .g-round-card__content > .g-round-card__foot > .btn-round--red`).click()
    }

    click_yongeLocationName() {
        return cy.get('[href="/locations/on/yorkdale-mall"]')
    }

    click_yorkLocationName() {
        return cy.get('[href="/locations/on/yonge-and-bloor-in-line"]')
    }

}

export const locationSelectionPage = new LocationSelectionPage();