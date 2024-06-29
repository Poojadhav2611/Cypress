///<reference types="Cypress"/>

describe('Intercept function', function () {
    it('Wait with cy.intercept', function () {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('GetComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('[class="network-btn btn btn-primary"]').click()
        cy.wait('@GetComment')
        cy.get('.network-comment').should('contain', 'laudantium enim quasi est')
    })

    it('wait with intercept and mapping data', function () {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('GetComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('[class="network-btn btn btn-primary"]').click()
        cy.wait('@GetComment').then(function ({ response, request }) {
            // cy.log(res)
            // cy.get('.network-comment').should('have.text',res.response.body.body)
            cy.get('.network-comment').should('have.text', response.body.body)

        })
    })
    it.only('wait with cy.intercept and stub network with mock', function () {
        cy.intercept({
            url: "https://jsonplaceholder.cypress.io/comments/1",
            method: "GET"
        },
            {

                body: {
                    "postId": 1,
                    "id": 1,
                    "name": "id labore ex et quam laborum",
                    "email": "Eliseo@gardner.biz",
                    "body": "Pooja Jadhav"
                }

            }

        ).as('GetComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@GetComment').then(function ({ response, request }) {
            cy.log(response.body.body)
            cy.get('.network-comment').should('have.text', response.body.body)

        })


    })

})







// })