import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { about_PO } from "../../support/pageObjects/AboutPO.js";

When('Mousehover on the About Menu and click it', ()=> {
    about_PO.HomePage_MenuItems("About")
});

And('Check and validate sub-menu navigation items', ()=> {
    cy.get('#navitem-about .menusubcategories li').find('a').then(subNavItems => {
        expect(subNavItems[0]).to.contain.text('Who We Are')
        expect(subNavItems[1]).to.contain.text('Great Food')
        expect(subNavItems[2]).to.contain.text('Giving Back')
        expect(subNavItems[3]).to.contain.text('History')
        expect(subNavItems[4]).to.contain.text('S. Truett Cathy Brands')
    })
});

