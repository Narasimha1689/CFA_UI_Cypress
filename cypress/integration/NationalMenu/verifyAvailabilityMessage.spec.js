Then('the message {string} is shown', msg => {
    //cy.eyesCheckWindow('Availiability message')
    cy.get('.menu-availability-callout > p')
        .should('contain', msg)
})