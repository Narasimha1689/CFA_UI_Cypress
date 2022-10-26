class HomePage {
    click_OrderCarryout() {
        return cy.get('.btn-container')
                .contains('Order Carry-out')
                .click()
    }
}

export const homePage = new HomePage();