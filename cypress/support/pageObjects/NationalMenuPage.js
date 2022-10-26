const item = [
    'SANDWICH_CFA_CHICKEN',
    'CHICK_N_MINIS',
    'EGG_WHITE_GRILL',
    'HBS_BURRITO',
    'HASHBROWN_BOWL',
    'BEC_BISCUIT',
    'SEC_BISCUIT',
    'BEC_MUFFIN',
    'SEC_MUFFIN',
    'BISCUIT_BUTTERED',
    'ENGLISH_MUFFIN',
    'HASH_BROWNS',
    'YOGURT_GREEK_PARFAIT',
    'FRUIT_CUP',
    'BISCUIT_CHICKEN',
    'CFA_DELUXE_SANDWICH',
    'SPICY_CHICKEN_CFA_SANDWICH',
    'SPICY_DELUXE_SANDWICH',
    'GRILLED_CHICKEN_SANDWICH',
    'GRILLED_CHICKEN_CLUB',
    'NUGGETS_CFA',
    'GRILLED_NUGGETS',
    'CHICK_N_STRIPS',
    'COBB_SALAD',
    'SALAD_SPICY_SOUTHWEST',
    'SALAD_MARKET',
    'WAFFLE_POTATO_FRIES',
    'SD_SALADS',
    'CHICKEN_SOUP',
    'KALE_CRUNCH_SIDE',
    'CHIPS_WAFFLE',
    'APPLE_SAUCE',
    'FROSTED_LEMONADE',
    'FROSTED_COFFEE',
    'COOKIE_CHOCOLATE_CHUNK',
    'BROWNIE_GROUP',
    'COOKIES_CREAM_MILKSHAKE',
    'CHOCOLATE_MILKSHAKE',
    'STRAWBERRY_MILKSHAKE',
    'VANILLA_MILKSHAKE',
    'SWEET_TEA_INDIVIDUAL',
    'MEAL_UNSWEET_TEA',
    'LEMONADE',
    'DIET_LEMONADE',
    'HALF_SWEET_HALF_UNSWEET_TEA',
    'SWEET_TEA_LEMONADE',
    'SWEET_TEA_DIET_LEMONADE',
    'UNSWEET_TEA_LEMOMADE',
    'UNSWEET_TEA_DIET_LEMONADE',
    'LEMONADE_DIET_LEMONADE',
    'ICED_COFFEE',
    'COCA_COLA',
    'DRPEPPER',
    'BOTTLED_WATER',
    'JUICE_MINUTE_MAID_APPLE',
    'JUICE_SIMPLY_ORANGE',
    'MILK_CHOCOLATE_1_PERCENT',
    'MILK_WHITE_1_PERCENT',
    'COFFEE',
    'GALLONS',
    'ICE_BAG_5_LB',
    'BBQ_ALLACART',
    'CFA_SAUCE_ALLACART',
    'RANCH_ALLACART',
    'HONEY_MUS_ALLACART',
    'HONEY_BBQ_ALLACART',
    'POLYNESIAN_ALLACART',
    'SRIRACHA_ALLACART',
    'BUFFALO_ALLACART',
]

class NationalMenuPage {

    visit() {
        return cy.visit('/menu')
    }

    click_chickenBiscuit() {
        return cy.get(`[href="/menu/chick-fil-a-chicken-biscuit"] > 
            .item-details > .item-title`).click()
    }
    click_chickenSandwich() {
        return cy.get('[alt="Chick-fil-A® Chicken Sandwich"]').click()
    }
    
    click_orderNowBtn() {
        return cy.get(`[data-tag=${item[0]}] > .btn`).forceClick()
    }

    assertModalHeader() {
        return cy.get('.header > h3')
            .should('contain', 'What type of order can we get started for you?')
    }

    selectOrderPickup() {
        return cy.checkVisibNClick('.pickup-btn')
    }

    selectOrderDelivery() {
        return cy.checkVisibNClick('.delivery-btn')
    }

}

export const nationalMenuPage = new NationalMenuPage();