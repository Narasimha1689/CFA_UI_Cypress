class Header {
    click_cfaIcon() {
        cy.get('.icon-logo-desktop')
            .click()
        cy.ifContains('h1', 'Start your order now')
    }

    click_locations() {
        cy.checkVisibNClick('.store-name > [href="/locations"]')
        cy.checkPathName('/locations')
    }

    click_food() {
        cy.get('.main-nav > .flex')
            .contains('Food')
            .click()
        cy.checkPathName('/menu')
    }

    click_about() {
        cy.get('.main-nav > .flex')
            .contains('About')
            .click()
    }
}

export const header = new Header();