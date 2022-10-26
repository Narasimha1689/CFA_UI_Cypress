class SignInPage {

    get_SignInGoogle() {
        return cy.get('.google-log-in')
    }
    get_SignInFacebook() {
        return cy.get('._btn-facebook')
    }
    get_SignInApple() {
        return cy.get('.social-button-apple')
    }
    get_Email() {
		return cy.get('[name="pf.username"]')
	}
	get_Password() {
		return cy.get('[name="pf.pass"]')
	}
	get_SignIn() {
		return cy.get('[name="pf.ok"]')
    }
    get_CheckRememberMeBox() {
        return cy.get('[name="pf.rememberUsername"]')
    }
    get_ForgotPassword() {
        return cy.get('.forgot-pw')
    }
    get_Signup() {
        return cy.get('.sign-up > a')
    }
    get_TermsAndConditions() {
        return cy.get('[href="https://www.chick-fil-a.com/legal"]')
    }
    get_PrivacyPolicy() {
        return cy.get('[href="https://www.chick-fil-a.com/legal/privacy"]')
    }

}

export const signInPage = new SignInPage();