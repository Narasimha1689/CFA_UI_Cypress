class ThankYouPage {
    
    visit() {
        return cy.visit('/online-ordering/thank-you')
    }
    click_ViewDashboard() {
        return cy.checkVisibNClick('.olo-thanks__ctas > .btn-round--red')
    }
    click_PrintOrderDetails() {
        return cy.checkVisibNClick('.olo-thanks__ctas > .btn-round--white')
    }
    click_Survey() {
        return cy.checkVisibNClick('.survey-link')
    }
    check_HeaderText() {
        cy.ifContains('h1', 'Thanks for your order! You will earn')
    }
    check_WelcomeMsg() {
        cy.ifContains('#welcomeMessage', 'Congrats')
    }
    
}

export const thankYouPage = new ThankYouPage();