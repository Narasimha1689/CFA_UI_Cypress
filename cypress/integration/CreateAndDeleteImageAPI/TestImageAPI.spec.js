import requestHeader from './requestHeader.json'
Then ('Create an Image on 03700 location',() => {
  cy.get('@accessToken').then(token =>{
    cy.log("test Alias token is "+token)
    cy.request({
      method:'POST',
      url:'https://www.chick-fil-astage.com/location-api/photos/03700',
      headers:
      {
          "Authorization": "Bearer "+ token
      },
      body: {
        "purpose": requestHeader.purpose,
        "imageData": requestHeader.imageData,
        "type": requestHeader.type
    }
    }).then((Response) =>{
      cy.log('Response is ' + JSON.stringify(Response))
      cy.log('image url is ' + Response.body.uri)
      cy.request({
        method:'GET',
        url:Response.body.uri,
      }).then((Response) => {
        expect(Response.status).to.eq(200)
      })
    })
  })
})
Then ('Delete the Image',() => {
  cy.get('@accessToken').then(token =>{
    cy.log("test Alias token is "+token)
    cy.request({
      method:'DELETE',
      url:'https://www.chick-fil-astage.com/location-api/photo',
      headers:
      {
          "Authorization": "Bearer "+ token
      },
      body: {
        "filename": requestHeader.filename,
    }
    }).then((Response) =>{
      cy.log('Response is ' + JSON.stringify(Response))
      expect(Response.status).to.eq(200)

    })
  })
})