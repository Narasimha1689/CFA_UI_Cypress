When(/^I click on "(.*)"$/, (str) => {
    cy.findByText(str).should('exist').click()
})