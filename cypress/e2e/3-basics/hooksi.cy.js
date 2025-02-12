/// <reference types="cypress" />
describe('verify the login', function () {
    beforeEach(function () {
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type("standard_user")
        cy.get('input[name="password"]').type('secret_sauce')
        cy.get('.btn_action').click()
    })

    it('verify the login with valid credentials ', function () {
        cy.get('.app_logo').should('be.visible')
    })

    // it('verify the login with invalid credentials', function () {
    //     cy.get('h3[data-test= "error"]').should('be.visible')
    // })

})