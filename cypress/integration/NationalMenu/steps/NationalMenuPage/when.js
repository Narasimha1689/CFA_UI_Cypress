import { When } from "cypress-cucumber-preprocessor/steps";
import { nationalMenuPage } from "../../../../support/pageObjects/NationalMenuPage.js";

When(/^I select "(.*)" for type of order$/, (str) => {
    if (str === 'order pickup') {
        cy.log('sucees')
        nationalMenuPage.selectOrderPickup()
    } else if (str === 'order delivery') {
        nationalMenuPage.selectOrderDelivery()
    } else {
        cy.log('SOMETHING WENT WRONG WITH ORDER SELECTION!')
    }
})