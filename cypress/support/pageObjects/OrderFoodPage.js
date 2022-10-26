class OrderFoodPage {
	
	visit() {
		return cy.visit('/orderfood')
	}
	get_OrderDelivery() {
		return cy.get('.btn-order-delivery')
	}
	get_OrderPickup() {
		return cy.get('.btn-keep-location-pickup')
	}
	get_AppleStore() {
		return cy.get('.personal > .apple')
	}
	get_GooglePlayStore() {
		return cy.get('.personal > .google')
	}
}

export const orderFoodPage = new OrderFoodPage();