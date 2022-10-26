class CFAOnePage {

    visit() {
        cy.visit('/one')
        cy.ifContains('.title', 'Chick-fil-A One')
    }

    click_JoinToday() {
        cy.checkVisibNClick('')
        return this
    }
    click_MemberTier() {
        cy.checkVisibNClick('')
        return this
    }
    click_SilverMemberTier() {
        cy.checkVisibNClick('')
        return this
    }
    click_RedMemberTier() {
        cy.checkVisibNClick('')
        return this
    }
    click_SignatureMemberTier() {
        cy.checkVisibNClick('')
        return this
    }
    click_GetStarted() {
        cy.checkVisibNClick('')
        return this
    }
}

export const cfaOnePage = new CFAOnePage();