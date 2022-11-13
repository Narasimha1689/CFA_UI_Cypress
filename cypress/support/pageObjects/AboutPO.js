class About_PO {

    visit() {
        cy.visit('https://www.chick-fil-a.com/')
    }

    HomePage_MenuItems(menu_Item) {
        cy.get('.main-nav li span').contains(menu_Item)
          .trigger('mouseover')
          .click()
    }

    WhoWeAre_Page(whoWeAre_Title) {
        cy.get('#truett_intro h1.title').should('have.have.text', whoWeAre_Title)
    }

    ClickOnReadaboutOurCommitment() {
        cy.get('.btn-container a')
          .first()
          .contains('Read about our commitment')
          .click({force:true})
    }

    TextValidation() {
        cy.get('.flex dt').first().should('contain.text', 'Ensuring equal access')
    }

    ClickOnPurchaseTickets() {
        cy.get('.wrapper .left a').invoke('removeAttr', 'target').click({force:true})
    }

    VerifyReservationHomePage() {
        cy.url().should('include', 'Home/Reservation')
    }

//     NavigateToAboutSubMenuURL(page) {
//     switch (page) {
//         case "Great Food":
//             cy.visit('/about/great-food')
//             break;
//         case "Giving Back":
//             cy.visit('/about/giving-back')
//             break;
//         default:
//             assert.isNotOk('everything', 'Page not found.')
//             break;
//     }
//   }
}

export const about_PO = new About_PO();