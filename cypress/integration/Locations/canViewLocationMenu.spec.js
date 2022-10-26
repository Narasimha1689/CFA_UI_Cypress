When(/^I click on the menu of location "(.*)"$/, (str) => {
    cy.iframe('#locatoriframe').contains('View details').first().should('be.visible').click();
    cy.contains('View restaurant menu').scrollIntoView().click();
    //cy.iframe('#locatoriframe').contains(`${str}`).should('be.visible').click();
})

Then('I see the menu for that {string}', location => {
    cy.checkPathName(`/${location}/menu`)
})
Then('I can select any filter and the results update immediately')