// When('I search for {string}', (location) => {
//     cy.visit(`/locations/ga/${location}`)
// })

Then('I see {string} page', (location) => {
    cy.iframe('#locatoriframe').contains('View details').first().should('be.visible').click();
    cy.checkPathName(`/locations/ga/${location}`)
    //cy.eyesCheckWindow(`${location} location page`)
})