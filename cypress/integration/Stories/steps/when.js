Given('I click on the {string} section', (page) => {
    switch (page) {
        case "Food":
            cy.wait(1000)
            cy.get('#food-id').click({force:true})
            cy.checkPathName('/food')
            cy.acceptCookies()
            break;
        case "Lifesytle":
            cy.wait(1000)
            cy.get('#lifestyle-id').click({force:true})
            cy.checkPathName('/lifestyle')
            cy.acceptCookies()
            break;
        case "inside-chick-fil-a":
            cy.wait(1000)
            cy.get('#cfa-stories-id').click({force:true})
            cy.checkPathName('/inside-chick-fil-a')
            cy.acceptCookies()
            break;
        case "News":
            cy.wait(1000)
            cy.get('#news-id').click({force:true})
            cy.checkPathName('/press-room')
            cy.acceptCookies()
            break;
        default:
            assert.isNotOk('everything', 'Page not found.')
            break;
    }
})