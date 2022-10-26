const locationName = 'Lab 201: Mobile, 00070';

class LocalMenuPage {
    visit() {
		return cy.visit(`${Cypress.env("locations").menuPage}`)
    }
    
    get_locationName() {
        return cy.get('h1')
    }

    click_orderPickupCTA() {
        return cy.get('.order-cta > ul > :nth-child(1) > a').click()
    }

    click_orderDeliveryCTA() {
        return cy.get('ul > :nth-child(2) > .lb-modal').click()
    }

    click_orderCateringCTA() {
        return cy.get('.order-cta > ul > :nth-child(3) > a').click()
    }

    //subnav-menu
    click_subNavMenuLink(subnav) {
        return cy.findByText(subnav).click()
    }

    click_chickenSandwich() {
        return cy.get(`[href="/locations/ga/lab-201-mobile-00070/menu/chick-fil-a-chicken-sandwich"] 
            > .item-details > .item-title`)
            .click()
    }

    click_chickenSandwichOrderNowBtn() {
        return cy.get('[data-tag="SANDWICH_CFA_CHICKEN"] > .btn').click()
    }

    select_orderPickup() {
        return cy.get('.pickup-btn').click()
    }

    select_orderDelivery() {
        return cy.get('.delivery-btn').click()
    }

    // Breakfast
    chicknMinisTrayUrl() {
        return cy.visit(`${partialUrl}Chick-n-MinissupRsup-Tray`)
    }
    chickfilAChickenBiscuitUrl() {
        return cy.visit('/orderfood/menu-item/chick-fil-a-chicken-biscuit')
    }
    baconBiscuitUrl() {
        return cy.visit('/orderfood/menu-item/bacon-biscuit')
    }
    SausageBiscuitUrl() {
        return cy.visit('/orderfood/menu-item/sausage-biscuit')
    }
    ButteredBiscuitUrl() {
        return cy.visit('/orderfood/menu-item/buttered-biscuit')
    }
    sunflowerMultigrainBagelUrl() {
        return cy.visit('/orderfood/menu-item/sunflower-multigrain-bagel')
    }

    //Trays
    chickfilANuggetsTrayUrl() {
        return cy.visit('/orderfood/menu-item/Chick-fil-AR-Nuggets-Trays')
    }

    hotChickfilANuggetTraysUrl() {
        return cy.visit('/orderfood/menu-item/hot-chick-fil-a-nugget-trays')
    }
    chilledChickfilANuggetTraysUrl() {
        return cy.visit('/orderfood/menu-item/chilled-chick-fil-a-nugget-trays') 
    }
    hotChicknStripsTraysUrl() {
        return cy.visit('/orderfood/menu-item/hot-chick-n-strips-trays')
    }
    chilledChicknStripsTraysUrl() {
        return cy.visit('/orderfood/menu-item/chilled-chick-n-strips-trays')
    }
    chickfilACoolWrapTraysUrl() {
        return cy.visit('/orderfood/menu-item/grilled-cool-wrap-trays')
    }
    fruiteTrayUrl() {
        return cy.visit('/orderfood/menu-item/fruit-tray')
    }
    chocolateChunkCookieTrayUrl() {
        return cy.visit('/orderfood/menu-item/chocolate-chunk-cookie-tray')
    }
    chilledGrilledChickenSubSandwichTrayUrl() {
        return cy.visit('/orderfood/menu-item/chilled-grilled-chicken-sub-sandwich-tray')
    }
    gardenSaladTrayUrl() {
        return cy.visit('/orderfood/menu-item/garden-salad-tray')
    }
    chocolateChunkCookieAndChocolateFudgeBrownieTrayUrl() {
        return cy.visit('/orderfood/menu-item/chocolate-chunk-cookie-and-chocolate-fudge-brownie-tray')
    }
    chocolateFudgeBrownieTrayUrl() {
        return cy.visit('/orderfood/menu-item/chocolate-fudge-brownie-tray')
    }
    grilledChickenBundleUrl() {
        return cy.visit('/orderfood/menu-item/grilled-chicken-bundle-1')
    }
    maCheeseTrayUrl() {
        return cy.visit(`${partialUrl}Mac-Cheese-Tray`)
    }
    spicyChilledGrilledChickenSubSandwichTrayUrl() {
        return cy.visit('/orderfood/menu-item/spicy-chilled-grilled-chicken-sub-sandwich-tray-1')
    }
    spicyGrilledChickenBundleUrl() {
        return cy.visit('/orderfood/menu-item/spicy-grilled-chicken-bundle-1')
    }
    kaleCrunchSideTrayUrl() {
        return cy.visit(`${partialUrl}Kale-Crunch-Side-Tray`)
    }

    //Entrees
    chickfilAChickenSandwichEntreeUrl() {
        return cy.visit('/orderfood/menu-item/Chick-fil-AR-Chicken-Sandwich')
    }
    spicyChickenSandwichUrl() {
        return cy.visit('/orderfood/menu-item/spicy-chicken-sandwich')
    }
    chickfilANuggetsUrl() {
        return cy.visit('/orderfood/menu-item/chick-fil-a-nuggets')
    }
    chilledGrilledChickenSubSandwichUrl() {
        return cy.visit('/orderfood/menu-item/chilled-grilled-chicken-sub-sandwich')
    }
    spicyChilledGrilledChickenSubSandwichUrl() {
        return cy.visit('/orderfood/menu-item/spicy-chilled-grilled-chicken-sub-sandwich-1')
    }


    //Salads & Wraps
    spicySouthwestSaladUrl() {
        return cy.visit('/orderfood/menu-item/spicy-southwest-salad')
    }
    chickfilACoolWrapUrl() {
        return cy.visit('/orderfood/menu-item/grilled-chicken-cool-wrap')
    }
    marketSaladUrl() {
        return cy.visit('/orderfood/menu-item/market-salad')
    }
    cobbSaladUrl() {
        return cy.visit('/orderfood/menu-item/Cobb-Salad')
    }

    //Sides & Treats
    chocolateChunkCookieUrl() {
        return cy.visit('/orderfood/menu-item/chocolate-chunk-cookie')
    }
    chocolateFudgeBrownieUrl() {
        return cy.visit('/orderfood/menu-item/chocolate-fudge-brownie')
    }
    sideSaladUrl() {
        return cy.visit('/orderfood/menu-item/side-salad')
    }
    wafflePotatoChipsUrl() {
        return cy.visit('/orderfood/menu-item/waffle-potato-chips')
    }

    // Beverages
    gallonFreshlyBrewedIcedTeaSweetenedUrl() {
        return cy.visit('/orderfood/menu-item/gallon-freshly-brewed-iced-tea-sweetened')
    }
    gallonFreshlyBrewedIcedTeaUnsweetenedUrl() {
        return cy.visit('/orderfood/menu-item/gallon-freshly-brewed-iced-tea-unsweetened')
    }
    gallonChickfilALemonadeUrl() {
        return cy.visit('/orderfood/menu-item/gallon-fresh-squeezed-lemonade')
    }
    gallonChickfilADietLemonadeUrl() {
        return cy.visit('/orderfood/menu-item/gallon-fresh-squeezed-diet-lemonade')
    }
    dasaniBottledWaterUrl() {
        return cy.visit('/orderfood/menu-item/dasani-bottled-water')
    }
    simplyOrangeUrl() {
        return cy.visit('/orderfood/menu-item/simply-orange')
    }
    honestKidsAppleJuiceUrl() {
        return cy.visit('/orderfood/menu-item/honest-kids-apple-juice')
    }
    onePercentWhiteMilkUrl() {
        return cy.visit('/orderfood/menu-item/1-white-milk')
    }
    onePercentChocolateMilkUrl() {
        return cy.visit('/orderfood/menu-item/1-chocolate-milk')
    }
    bagOfIceUrl() {
        return cy.visit('/orderfood/menu-item/5-lb-bag-of-ice')
    }
    cateringCoffeeUrl() {
        return cy.visit('/orderfood/menu-item/catering-coffee')
    }
    iceBucketUrl() {
        return cy.visit('/orderfood/menu-item/ice-bucket')
    }

    //Packaged meals
    chickfilAChickenSandwichPackagedMealUrl() {
        return cy.visit('/orderfood/menu-item/chick-fil-a-chicken-sandwich-packaged-meal')
    }
    spicyChickenSandwichPackagedMealUrl() {
        return cy.visit('/orderfood/menu-item/spicy-chicken-sandwich-packaged-meal')
    }
    chilledGrilledChickenSubPackagedMealUrl() {
        return cy.visit('/orderfood/menu-item/chilled-grilled-chicken-sub-packaged-meal')
    }
    eightCtChickfilANuggetsPackagedMealUrl() {
        return cy.visit('/orderfood/menu-item/8-ct-chick-fil-a-nuggets-packaged-meal')
    }
    chickfilACoolWrapPackagedMealUrl() {
        return cy.visit('/orderfood/menu-item/grilled-chicken-cool-wrap-packaged-meal')
    }
    spicyChilledGrilledChickenSubSandwichPackagedMealUrl() {
        return cy.visit('/orderfood/menu-item/spicy-chilled-grilled-chicken-sub-sandwich-packaged-meal')
    }
}

export const localMenuPage = new LocalMenuPage();