class LocationDetailsPage {
    visit() {
		return cy.visit('/locations/ga/lab-178-mobile-00458')
    }

    get_locationName() {
        return cy.get('h1')
    }

    get_address() {
        return cy.get('.address')
    }

    get_distance() {
        return cy.get('.distance')
    }

    get_heartIcon() {
        return cy.get('.heart-icon')
    }

    click_orderCateringCTA() {
        return cy.get('.location-order-selection > ul > :nth-child(3) > a').click()
    }

    click_orderPickupCTA() {
        return cy.get('.location-order-selection > ul > :nth-child(1) > a').click()
    }

    click_orderDeliveryCTA() {
        return cy.get(':nth-child(2) > .lb-modal').click()
    }

    click_viewRestaurantMenuCTA() {
        return cy.get('.store-menu > .btn').click()
    }
}

export const locationDetailsPage = new LocationDetailsPage();