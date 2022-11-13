class ChickfilAOne_PO {

    clickOnChickfilAOneMenu() {
       return cy.get('#navitem-cfaone a').trigger('mouseover')
    }

    chickfilAOneHeaderText(HeaderText) {
        return cy.get('.one-hero-content h1', {timeout : 6000}).should('contain', HeaderText)
    }

    chickfilAOneParagraphText(ParagraphText) {
        return cy.get('.one-hero-content p').should('contain', ParagraphText)
    }

    chickfilAOneImageLinkVerification(imageLink) {
        cy.get('.one-hero-content').find('img').then($getSrc => {
            const srcImage = $getSrc.attr('src')
            expect(srcImage).to.be.contains(imageLink)
        })        
    }

    chickfilAOne123SectionHeaderText(headerText123Section, index) {
        return cy.get('.wrapper .three-columns li h4').eq(index).should('contain', headerText123Section)
    }

    chickfilAOne123SectionParagraphText(paragraphText123Section, index) {
        return cy.get('.wrapper .three-columns li p').eq(index).should('contain', paragraphText123Section)
    }

}

export const chickfilAOne_PO = new ChickfilAOne_PO();