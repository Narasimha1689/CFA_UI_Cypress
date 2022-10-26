
When('I click on an item on the menu', () => {
    localMenuPage.click_chickenSandwich()
})

Then('click on Order now button and check url', (btn) => {
    cy.get(`.p-details > .pdp-pwo-cta > .btn-container > [data-id="orderpickup"]`).click().then(()=>{
        cy.url().should('include', 'itemTag=SANDWICH_CFA_CHICKEN')
    })
})
