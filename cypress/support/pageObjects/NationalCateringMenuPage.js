class NationalCateringMenuPage {

    visit() {
		return cy.visit('/catering')
    }
    
    // Breakfast
    chicknMinisTrayUrl() {
        return cy.visit('/catering/chick-n-minis-tray')
    }
    chickfilAChickenBiscuitUrl() {
        return cy.visit('/catering/chick-fil-a-chicken-biscuit')
    }
    baconBiscuitUrl() {
        return cy.visit('/catering/bacon-biscuit')
    }
    SausageBiscuitUrl() {
        return cy.visit('/catering/sausage-biscuit')
    }
    ButteredBiscuitUrl() {
        return cy.visit('/catering/buttered-biscuit')
    }
    sunflowerMultigrainBagelUrl() {
        return cy.visit('/catering/sunflower-multigrain-bagel')
    }

    //Trays
    hotChickfilANuggetTraysUrl() {
        return cy.visit('/catering/hot-chick-fil-a-nugget-trays')
    }
    chilledChickfilANuggetTraysUrl() {
        return cy.visit('/catering/chilled-chick-fil-a-nugget-trays') 
    }
    hotChicknStripsTraysUrl() {
        return cy.visit('/catering/hot-chick-n-strips-trays')
    }
    chilledChicknStripsTraysUrl() {
        return cy.visit('/catering/chilled-chick-n-strips-trays')
    }
    chickfilACoolWrapTraysUrl() {
        return cy.visit('/catering/grilled-cool-wrap-trays')
    }
    fruiteTrayUrl() {
        return cy.visit('/catering/fruit-tray')
    }
    chocolateChunkCookieTrayUrl() {
        return cy.visit('/catering/chocolate-chunk-cookie-tray')
    }
    chilledGrilledChickenSubSandwichTrayUrl() {
        return cy.visit('/catering/chilled-grilled-chicken-sub-sandwich-tray')
    }
    gardenSaladTrayUrl() {
        return cy.visit('/catering/garden-salad-tray')
    }
    chocolateChunkCookieAndChocolateFudgeBrownieTrayUrl() {
        return cy.visit('/catering/chocolate-chunk-cookie-and-chocolate-fudge-brownie-tray')
    }
    chocolateFudgeBrownieTrayUrl() {
        return cy.visit('/catering/chocolate-fudge-brownie-tray')
    }
    grilledChickenBundleUrl() {
        return cy.visit('/catering/grilled-chicken-bundle-1')
    }
    maCheeseTrayUrl() {
        return cy.visit('/catering/mac-cheese-tray-1')
    }
    spicyChilledGrilledChickenSubSandwichTrayUrl() {
        return cy.visit('/catering/spicy-chilled-grilled-chicken-sub-sandwich-tray-1')
    }
    spicyGrilledChickenBundleUrl() {
        return cy.visit('/catering/spicy-grilled-chicken-bundle-1')
    }

    //Entrees
    chickfilAChickenSandwichUrl() {
        return cy.visit('/catering/chick-fil-a-chicken-sandwich')
    }
    spicyChickenSandwichUrl() {
        return cy.visit('/catering/spicy-chicken-sandwich')
    }
    chickfilANuggetsUrl() {
        return cy.visit('/catering/chick-fil-a-nuggets')
    }
    chilledGrilledChickenSubSandwichUrl() {
        return cy.visit('/catering/chilled-grilled-chicken-sub-sandwich')
    }
    spicyChilledGrilledChickenSubSandwichUrl() {
        return cy.visit('/catering/spicy-chilled-grilled-chicken-sub-sandwich-1')
    }


    //Salads & Wraps
    spicySouthwestSaladUrl() {
        return cy.visit('/catering/spicy-southwest-salad')
    }
    chickfilACoolWrapUrl() {
        return cy.visit('/catering/grilled-chicken-cool-wrap')
    }
    marketSaladUrl() {
        return cy.visit('/catering/market-salad')
    }
    cobbSaladUrl() {
        return cy.visit('/catering/cobb-salad')
    }

    //Sides & Treats
    chocolateChunkCookieUrl() {
        return cy.visit('/catering/chocolate-chunk-cookie')
    }
    chocolateFudgeBrownieUrl() {
        return cy.visit('/catering/chocolate-fudge-brownie')
    }
    sideSaladUrl() {
        return cy.visit('/catering/side-salad')
    }
    wafflePotatoChipsUrl() {
        return cy.visit('/catering/waffle-potato-chips')
    }

    // Beverages
    gallonFreshlyBrewedIcedTeaSweetenedUrl() {
        return cy.visit('/catering/gallon-freshly-brewed-iced-tea-sweetened')
    }
    gallonFreshlyBrewedIcedTeaUnsweetenedUrl() {
        return cy.visit('/catering/gallon-freshly-brewed-iced-tea-unsweetened')
    }
    gallonChickfilALemonadeUrl() {
        return cy.visit('/catering/gallon-fresh-squeezed-lemonade')
    }
    gallonChickfilADietLemonadeUrl() {
        return cy.visit('/catering/gallon-fresh-squeezed-diet-lemonade')
    }
    dasaniBottledWaterUrl() {
        return cy.visit('/catering/dasani-bottled-water')
    }
    simplyOrangeUrl() {
        return cy.visit('/catering/simply-orange')
    }
    honestKidsAppleJuiceUrl() {
        return cy.visit('/catering/honest-kids-apple-juice')
    }
    onePercentWhiteMilkUrl() {
        return cy.visit('/catering/1-white-milk')
    }
    onePercentChocolateMilkUrl() {
        return cy.visit('/catering/1-chocolate-milk')
    }
    bagOfIceUrl() {
        return cy.visit('/catering/5-lb-bag-of-ice')
    }
    cateringCoffeeUrl() {
        return cy.visit('/catering/catering-coffee')
    }
    iceBucketUrl() {
        return cy.visit('/catering/ice-bucket')
    }

    //Packaged meals
    chickfilAChickenSandwichPackagedMealUrl() {
        return cy.visit('/catering/chick-fil-a-chicken-sandwich-packaged-meal')
    }
    spicyChickenSandwichPackagedMealUrl() {
        return cy.visit('/catering/spicy-chicken-sandwich-packaged-meal')
    }
    chilledGrilledChickenSubPackagedMealUrl() {
        return cy.visit('/catering/chilled-grilled-chicken-sub-packaged-meal')
    }
    eightCtChickfilANuggetsPackagedMealUrl() {
        return cy.visit('/catering/8-ct-chick-fil-a-nuggets-packaged-meal')
    }
    chickfilACoolWrapPackagedMealUrl() {
        return cy.visit('/catering/grilled-chicken-cool-wrap-packaged-meal')
    }
    spicyChilledGrilledChickenSubSandwichPackagedMealUrl() {
        return cy.visit('/catering/spicy-chilled-grilled-chicken-sub-sandwich-packaged-meal')
    }

}

export const nationalCateringMenuPage = new NationalCateringMenuPage();