const { nationalMenuPage } = require("../../support/pageObjects/NationalMenuPage")

When('I click on an item on the menu', () => {
    nationalMenuPage.click_chickenSandwich()
})