///  <reference types="cypress"/>

describe('verify Post comment', function () {
    it('verify using cy.intercept()', function () {
        cy.intercept({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments"
        }).as('PostComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-post').first().click()
        cy.wait('@PostComment').then(function (res) {
            cy.expect(res.response.statusCode).to.eq(201)
            cy.get('.network-post-comment').should('have.text', 'POST successful!')
        })

    })

    it.only('verify using request', function () {
        cy.request({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments",
            body: {
                "name": "Using POST in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
            }
        }).then(function (res) {
            cy.visit('https://example.cypress.io/commands/network-requests')
            cy.log(res)
            cy.expect(res.status).to.eq(201)

        })
    })
})