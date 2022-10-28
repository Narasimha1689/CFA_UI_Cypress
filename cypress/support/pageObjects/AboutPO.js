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
          .click()
    }

    TextValidation() {
        cy.get('.flex dt').first().should('contain.text', 'Ensuring equal access')
    }

    ClickOnPurchaseTickets() {
        cy.get('.wrapper .left a').invoke('removeAttr', 'target').click()
    }

    VerifyReservationHomePage() {
        cy.url().should('include', 'Home/Reservation')
    }
}

export const about_PO = new About_PO();