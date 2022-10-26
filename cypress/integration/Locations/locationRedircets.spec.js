const urls = require('../../fixtures/marketableNames.json')
When('I Open locations url', () => {
   urls.forEach(url =>{
    cy.log("url to be visited is "+ url.MarketableName)
    cy.visit("https://www.chick-fil-a.com/"+url.MarketableName)
   })
})
