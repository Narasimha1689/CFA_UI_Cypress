class Footer {

    click_NutritionAllergens() {
        cy.checkVisibNClick('.footer-nav > [aria-label=""] > :nth-child(1) > a')
        return this
    }
    click_ContactUs() {
        cy.checkVisibNClick('.footer-nav > [aria-label=""] > :nth-child(2) > a')
        return this
    }
    click_Careers() {
        cy.checkVisibNClick('.footer-nav > [aria-label=""] > :nth-child(3) > a')
        return this
    }
    click_Franchising() {
        cy.checkVisibNClick('.footer-nav > [aria-label=""] > :nth-child(4) > a')
        return this
    }
    click_Merchandise() {
        cy.checkVisibNClick('.footer-nav > [aria-label=""] > :nth-child(5) > a')
        return this
    }
    click_DoBusinessWithUs() {
        cy.checkVisibNClick('[aria-label=""] > :nth-child(6) > a')
        return this
    }
    click_FacebookSocialIcon() {
        cy.checkVisibNClick('.icon-facebook-over')
        return this
    }
    click_InstagramSocialIcon() {
        cy.checkVisibNClick('.icon-instagram-over')
        return this
    }
    click_TwitterSocialIcon() {
        cy.checkVisibNClick('.icon-twitter-over')
        return this
    }
    click_YoutubeSocialIcon() {
        cy.checkVisibNClick('.icon-youtube-over')
        return this
    }
    click_LinkedinSocialIcon() {
        cy.checkVisibNClick('.icon-linkedin-over')
        return this
    }
    click_TumblrSocialIcon() {
        cy.checkVisibNClick('.icon-tumblr-over')
        return this
    }
    click_Legal() {
        cy.findByText('Legal').click()
        return this
    }
    click_PrivacyPolicy() {
        cy.findByText('Privacy Policy').click()
        return this
    }
    click_CookiePreference() {
        cy.findByText('Cookie Preference Center').click()
        return this
    }
    // accessbility footer link in prod only
    click_Accessibility() {
        cy.findByText('Accessibility').click()
        return this
    }
    click_CaliforniaTransparency() {
        cy.findByText('California Transparency in Supply Chains Act').click()
        return this
    }
    click_LocationsListing() {
        cy.findByText('Locations listing').click()
        return this 
    }
    
}

export const footer = new Footer();