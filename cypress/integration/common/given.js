Given('I am on the {string} page', (page) => {
    switch (page) {
        case "covid":
            cy.visit('/covid')
            cy.checkPathName('/covid')
            cy.acceptCookies()
            break;
        case "delivery":
            cy.visit('/delivery')
            cy.checkPathName('/delivery')
            cy.acceptCookies()
            break;
        case "location menu":
            cy.visit('/locations/ny/fulton-street-in-line/menu')
            cy.checkPathName('/locations')
            cy.acceptCookies()
            break;
        case "locations":
            cy.visit('/locations')
            cy.checkPathName('/locations')
            cy.acceptCookies()
            break;
        case "national menu":
            cy.visit('/menu')
            cy.checkPathName('/menu')
            cy.acceptCookies()
            break;
        case "sign in":
            cy.visit('/')
            cy.acceptCookies()
            break;
        case ".Com homepage":
            cy.visit('/')
            cy.acceptCookies()
            break;
        case ".CA homepage":
            cy.visit(`${Cypress.env('baseUrlCa')}`)
            //cy.acceptCookiesCa()
            break;
        case "Stories":
            cy.visit('/stories')
            cy.acceptCookies()
            break;
        case "About Great Food":
            cy.visit('/about/great-food')
            cy.acceptCookies()
            break;
        case "About Giving Back":
            cy.visit('/about/giving-back')
            cy.acceptCookies()
            break;
        case "About History":
            cy.visit('/about/history')
            cy.acceptCookies()
            break;
        case "About s-truett-cathy":
            cy.visit('/about/s-truett-cathy-brand-restaurants')
            cy.acceptCookies()
            break; 
        case "About Who We Are":
            cy.visit('/about/who-we-are')
            cy.acceptCookies()
            break;
        default:
            assert.isNotOk('everything', 'Page not found.')
            break;
    }
})