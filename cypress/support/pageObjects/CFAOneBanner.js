class CFAOneBanner {

    click_AppleStore() {
        cy.checkVisibNClick('.apple')
        return this
    }
    click_GooglePlayStore() {
        cy.checkVisibNClick('.google')
        return this
    }
    click_LearnMore() {
        cy.checkVisibNClick('.btn--vis')
        return this
    }
    click_SignIn() {
        cy.checkVisibNClick('.signIn-wrapper > form > button')
        return this
    }
}

export const cfaOneBanner = new CFAOneBanner();