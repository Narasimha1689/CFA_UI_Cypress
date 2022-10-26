And('click on sub sections of National Menu and check for an item on UI', datatable => {
    datatable.hashes().forEach(row => {
        cy.get(`[href="#${row.section}"]`).click()
        cy.get(`[alt="${row.item}"]`).should('be.visible');
    })
})
