When('check for Limited Results Filter and Open College Football Hall of Fame location', () => {
    //  cy.iframe('#locatoriframe').contains('Limited menu being served, no mobile ordering').should('be.visible').click();
     cy.iframe('#locatoriframe').contains('College Football Hall of Fame').should('be.visible').click();
     cy.checkPathName('college-football-hall-of-fame')
 })

And(/^I click on the location "(.*)"$/, (str) => {
    cy.iframe('#locatoriframe').contains(`${str}`).should('be.visible').click();
})

And(/^I click on the view details of location "(.*)"$/, (str) => {
    cy.iframe('#locatoriframe').contains('View details').first().should('be.visible').click();
})

Then(/^Details are displayed for location "(.*)"$/, (str) => {
    cy.get('h1').should('have.text',`${str}`)
    //cy.iframe('#locatoriframe').contains(`${str}`).should('be.visible').click();
})