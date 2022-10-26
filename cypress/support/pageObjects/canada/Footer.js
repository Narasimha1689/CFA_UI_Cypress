class Footer {

    customerService() {
        cy.checkVisibNClick('.footer-nav > :nth-child(1) > :nth-child(1) > a > span')
        cy.checkPathName('/contact-support')
        cy.ifContains('h1', 'Customer service')
        cy.eyesCheckWindow('Customer service page')
        cy.go('back')
        return this
    }

    nutritionAndAllergens() {
        cy.checkVisibNClick(':nth-child(1) > :nth-child(2) > a > span')
        cy.checkPathName('/nutrition-allergens')
        cy.ifContains('h1', 'Nutrition & Allergens')
        cy.eyesCheckWindow('Nutrition & Allergens page')
        cy.go('back')
        return this
    }

    franchising() {
        // in staging see you soon alert popup occurs
        cy.checkVisibNClick('.footer-nav > :nth-child(1) > :nth-child(3) > a > span')
        cy.checkPathName('/franchise')
        cy.ifContains('h1', 'Franchising')
        cy.get('h1').should('contain', 'Franchising')
        cy.eyesCheckWindow('Franchising page')
        cy.go('back')
        return this
    }

    corporateCareers() {
        // link only exists on prod
        if (Cypress.config().baseUrl === 'https://www.chick-fil-a.ca') {
            cy.checkVisibNClick(':nth-child(4) > a > span')
            cy.checkPathName('/employment-opportunities-with-chick-fil-a-canada-ulc')
            cy.ifContains('h1', 'Employment opportunities with Chick-fil-A Canada, ULC')
            cy.eyesCheckWindow('Employment opportunities page')
            cy.go('back')
        } else {
            assert.isOk('everything', 'Corporate Careers link does not exist on staging.')
        }
        return this
    }

    pressRoom() {
        cy.checkVisibNClick('.footer-sub-nav > :nth-child(1) > a > span')
        cy.checkPathName('/press-room')
        cy.ifContains('h1', 'Press Room')
        cy.eyesCheckWindow('Press room page')
        cy.go('back')
        return this
    }

    giftCards() {
        // link only exists on staging
        if (Cypress.config().baseUrl === 'https://www.chick-fil-astage.ca') {
            cy.checkVisibNClick('.footer-sub-nav > :nth-child(2) > a > span')
            cy.checkPathName('/gift-cards')
            cy.ifContains('h1', 'gift cards')
            cy.eyesCheckWindow('Gift cards page')
            cy.go('back')
        } else {
            assert.isOk('everything', 'Gift cards link does not exist on prod.')
        }
        return this
    }

    legal() {
        cy.findByText('Legal').click()
        cy.checkPathName('/legal')
        cy.ifContains('h1', 'Legal')
        cy.eyesCheckWindow('Legal page')
        cy.go('back')
        return this
    }

}

export const footer = new Footer();