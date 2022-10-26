# .COM-CypressAutomation

## Installation
Clone down the project and run `npm install` in terminal to install project.

## Usage
Create a `cypress.env.json` file and add it to `.gitignore`. This file should contain environment variables or potential secrets that can be passed into tests using `Cypress.env('example')`.

To open cypress test runner run the following command (ensure to include the config file)
`npx cypress open` or `npm run test`

To record the test to report to Cypress dashboard via terminal run the following command
`npm run record`

To run a specific group of tests run the following command with a specified tag(once Cucumber integrated)
`npx cypress-tags run -e TAGS='@REGRESSION'`