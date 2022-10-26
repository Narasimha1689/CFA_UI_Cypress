const futureLocationPath = '/locations/al/helena-al'

When('I navigate to a location of future status', () => {
    cy.visit(futureLocationPath)
    cy.checkPathName(futureLocationPath)
})

Then('I see all the future location\'s details', () => {
    cy.get('h1').should('have.text','Helena (AL)')
})