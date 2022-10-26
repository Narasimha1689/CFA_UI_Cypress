class HomePage {

    click_PromoBannerLink() {
        cy.checkVisibNClick('.arrow-link > a')
        return this
    }
    click_HeroBannerOrderBtn() {
        cy.checkVisibNClick('.desktop-only > .btn-round')
        return this
    }
    click_ExploreMenuCalloutBtn() {
        cy.checkVisibNClick('.homepage-menu-callout > .content > .btn-round')
        return this
    }
    click_OrderNowCalloutBtn() {
        cy.checkVisibNClick(':nth-child(4) > .content > .btn-round')
        return this
    }
    click_JoinTodayRewardBtn() {
        cy.checkVisibNClick('.rewards-section > .content > .btn-round')
        return this
    }
    click_LearnMoreSupportBtn() {
        cy.checkVisibNClick('.cool-white-bckgrd > .content > .btn-round')
        return this
    }
    click_SeeMoreStoriesBtn() {
        cy.checkVisibNClick('.g-boxes__footer > .btn-round')
        return this
    }
    click_LearnMoreNutritionBtn() {
        cy.checkVisibNClick('.nutrients-allergens-callout > .content > .btn-round')
        return this
    }


    // chickenBiscuit() {
    //     cy.checkVisibNClick('.home-menu > .subnav > #menusubcategoricalid > :nth-child(1) > a')
    //     cy.verifyHref('.menu-items > :nth-child(1) > :nth-child(1) > a', 'chick-fil-a-chicken-biscuit')
    // }
    // get_BreakfastTab() {
    //     return cy.get('.home-menu > .subnav > #menusubcategoricalid > :nth-child(1) > a')
    // }
    // get_EntreesTab() {
    //     return cy.get('.home-menu > .subnav > #menusubcategoricalid > :nth-child(2) > a')
    // }
    // get_SaladsTab() {
    //     return cy.get('.home-menu > .subnav > #menusubcategoricalid > :nth-child(3) > a')
    // }
    // get_SidesTab() {
    //     return cy.get('.home-menu > .subnav > #menusubcategoricalid > :nth-child(4) > a')
    // }
    // get_KidsMealTab() {
    //     return cy.get('.home-menu > .subnav > #menusubcategoricalid > :nth-child(5) > a')
    // }
    // get_TreatsTab() {
    //     return cy.get('.home-menu > .subnav > #menusubcategoricalid > :nth-child(6) > a')
    // }
    // get_DrinksTab() {
    //     return cy.get('.home-menu > .subnav > #menusubcategoricalid > :nth-child(7) > a')
    // }
    // get_DippingSaucesAndDressingsLink() {
    //     return cy.get('.home-menu > .subnav > #menusubcategoricalid > :nth-child(8) > a')
    // }
    // get_CateringLink() {
    //     return cy.get('.home-menu > .subnav > #menusubcategoricalid > :nth-child(9) > a')
    // }
}

export const homePage = new HomePage();