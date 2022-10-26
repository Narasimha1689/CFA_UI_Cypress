class Header {

    click_ChickenLogo() {
        cy.checkVisibNClick('.icon-logo-desktop')
        return this
    }
    click_FindARestaurant() {
        cy.checkVisibNClick(':nth-child(2) > .current-location > button')
        return this
    }
    click_Menu() {
        cy.checkVisibNClick('[href="/menu"]')
        return this
    }
    click_Stories() {
        cy.checkVisibNClick('#stories-id')
        return this
    }
    click_About() {
        cy.findByText('About').click()
        return this
    }
    click_Careers() {
        cy.findByText('Careers').click()
        return this
    }
    click_CFAOneLink() {
        cy.checkVisibNClick('#navitem-cfaone > a')
        return this
    }
    click_SignInLink() {
        cy.checkVisibNClick('#toolbar-menu-signIn > button')
        return this
    }
    click_OrderFoodBtn() {
        cy.checkVisibNClick('.order-button-group > .btn-round--red')
        return this
    }
    searchSite(query) {
        cy.checkVisibNClick('.site-search > .icon-search-off')
        cy.get('#keyword').type(query)
        return this
    }

    // if signed in
    get_HiText() {
        cy.fixture('testAccounts').then(data => {
            cy.get('.username')
                .should('contain', `Hi, ${data.testUser.firstName}`)
          })
    }
    click_ViewAccount() {
        cy.checkVisibNClick('[href="/myprofile/points"]')
        return this
    }
    get_SignOut() {
        cy.get('[href="/Account/Logout"]')
        return this
    }
    
}

export const header = new Header();