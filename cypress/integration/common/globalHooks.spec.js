import { Before, After } from 'cypress-cucumber-preprocessor/steps'

// These hooks will run once only per feature file
before(() => {
    cy.log("Running first scenario...")
})

after(() => {
    cy.log("All scenarios completed for this feature.")
})

Before(() => {
  cy.log("Test is starting...")
})

After(() => {
  cy.log('Test completed.')
})