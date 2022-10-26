When('I click on an item on the local menu', () => {
    cy.get('[alt="Chick-fil-A® Chicken Sandwich"]').click()
})

When('I click on order now button under an item', () => {
    cy.get('[data-tag="SANDWICH_CFA_CHICKEN"] > .btn').click()
})