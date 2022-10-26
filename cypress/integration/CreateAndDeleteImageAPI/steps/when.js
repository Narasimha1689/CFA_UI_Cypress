When('Navigate to Control Point and get Access Token', () => {
    cy.visit('https://test-ctrl.cfahome.com',{ timeout: 90000 })
    cy.get('h2').then($h2 => {
      if ($h2.is(':visible')) {
        cy.get('#okta-signin-username').type('narasimha.alidena1')
        cy.get('#okta-signin-password').type('wqGsgkbEHEHC')
        cy.get('#okta-signin-submit').click()
        cy.get('.text-right > span').should('contain',' Narasimha Alidena ')
        cy.get('h2').should('contain','ControlPoint')
      } 
      else{
        cy.get('.text-right > span').should('contain',' Narasimha Alidena ')
        cy.get('h2').should('contain','ControlPoint')
      }
    })
    cy.window().then(win => {
      cy.wrap(win.sessionStorage.userToken).as('accessToken')
      cy.log("test window token is "+win.sessionStorage.userToken) 
      cy.get('@accessToken').then(token =>{
        cy.log("test Alias token is "+token)
      })
    })
})