// When('I search for {string}', (location) => {
//     cy.get('#find-location').forceClick()
//     cy.get('#location-search').type(`${location}`)
//     //cy.get(':nth-child(2) > .icon-search-off').click() //results in cypress whoops error
// })

Then('an error Image is displayed', () => {
    cy.get('div').find("img").should('be.visible');
})