///<reference types="Cypress"/>

describe('verify the shadowDom element', function () {


    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('Using shadow() chaining', function () {
        cy.visit('https://selectorshub.com/xpath-practice-page/')
        // cy.get('#pizza').type('Margrita')
        // cy.get('#userName').shadow().find('#app2').shadow().find('#pizza').type('Margrita')

        // cy.get('#pizza').should('be.visible').type("Margrita")
        cy.wait(20000)
        cy.get('#pizza',{includeShadowDom:true}).should('be.visible').type("Margrita")
    })
})