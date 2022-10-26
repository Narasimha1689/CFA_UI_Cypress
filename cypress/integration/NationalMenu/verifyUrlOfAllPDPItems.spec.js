Then('I assert href attribute for all items on menu page', datatable => {
    datatable.hashes().forEach(row => {
        cy.get(`[href="/menu/${row.item}"]`)
            .should('have.prop', 'href', `${Cypress.config().baseUrl}/menu/${row.item}`)
    })
})
