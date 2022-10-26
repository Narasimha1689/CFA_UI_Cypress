class MyProfilePage {

    getRewardsBalance() {
        cy.get('.cp-nav__rewards')
            .then($txt => {
                const txt = $txt.text();
                //expect(txt).to.contain('PTS')
            })
    }
    click_RewardsTab() {
        cy.checkVisibNClick('#cp-nav__accord-toggle-1')
        return this
    }
    click_NewsTab() {
        cy.checkVisibNClick('#news-id')
        return this
    }
    click_EditProfileTab() {
        cy.checkVisibNClick('#edit-profile-id')
        return this
    }
    click_EditFavoritesTab() {
        cy.checkVisibNClick('#edit-favorites-id')
        return this
    }
    click_PendingOrdersTab() {
        cy.checkVisibNClick('#pending-orders-id')
        return this
    }
    click_TransactionHistoryTab() {
        cy.checkVisibNClick('#transaction-history-id')
        return this
    }
    click_ManagePaymentMethodsTab() {
        cy.checkVisibNClick('#manage-payment-methods-id')
        return this
    }
    click_SubmitMissedTransactionTab() {
        cy.checkVisibNClick('#submit-missed-transaction-id')
        return this
    }
    click_RedeemMyPoints() {
        cy.checkVisibNClick('.nge-points__giant-wrap > .btn')
        return this
    }
    click_BasicMemberTier() {
        cy.checkVisibNClick('[data-member-link="basic-member"] > a')
        return this
    }
    click_SilverMemberTier() {
        cy.checkVisibNClick('[data-member-link="silver-member"] > a')
        return this
    }
    click_RedMemberTier() {
        cy.checkVisibNClick('[data-member-link="red-member"] > a')
        return this
    }
    click_SignatureMemberTier() {
        cy.checkVisibNClick('.arrow_box > a')
        return this
    }
    click_ScanForPointsProgress() {
        cy.checkVisibNClick('.nge-text__block--small > .btn')
        return this
    }
    click_ViewAllRewards() {
        cy.checkVisibNClick('.nge-pointcards__btn-wrap > .btn')
        return this
    }

}

export const myProfilePage = new MyProfilePage();