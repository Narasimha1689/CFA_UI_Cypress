And(/^click on "(.*)"$/, (str) => {
    cy.findByText(str).should('exist').click()
})