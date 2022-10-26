When('click on sub section and check the category tagline', datatable => {
    datatable.hashes().forEach(row => {
        cy.get(`#${row.element}`).click()
        cy.get('h1').should('contain', `${row.tagline}`)
    })
})

Then('I Navigate to First story on favourite stories', () => {
    //cy.contains ('span[class="number"]', '4').click()
    cy.get('.top-shared-frame').scrollIntoView()
    cy.get('h3').should('contain','The Coop')
    cy.get(':nth-child(3) > a > .story-title').click({force: true});
})

And('Verify Facebook share button is visble when scrolled', () =>{
    cy.scrollTo('center')
    cy.get('[data-action="facebook"]').should('be.visible')
})

Then('Check the slide content on Main Stories page', () =>{
    cy.get('#story-landing-feed-id > .lead-story > .slide-content').should('be.visible')
    cy.get('#story-landing-feed-id > .lead-story > .slide-content').should('be.visible')
})

When('I click on the Load More button', () =>{
    cy.get('#story-feed-load-more-btn').click()
})

Then('click on the one of the new stories',()=>{
    cy.get(':nth-child(5) > .flex > .cfa-stories').click()
})

Then('check for load more button showing again and click',()=>{
    cy.get('#story-feed-load-more-btn').should('be.visible').click()
})

And('Check for related stories and open any related story',()=>{
    cy.get('.related > h2').should('contain','Related stories')
    cy.get('.related > .flex > .cfa-stories').should('be.visible').click()
})

Then('check for Lets be friends and Social Media Icons',()=>{
    cy.get('.co-social').should('be.visible')
    cy.get('.co-social > .wrapper > .title').should('contain','Let’s be friends')
    cy.get('.co-social > .wrapper > .tagline').should('contain','Over 10.5 million likes and subscribers')
    cy.get('.social-icons > .icon-facebook-over').should('be.visible')
    cy.get('.social-icons > .icon-twitter-over').should('be.visible')
    cy.get('.social-icons > .icon-instagram-over').should('be.visible')
    cy.get('.social-icons > .icon-youtube-over').should('be.visible')
})


