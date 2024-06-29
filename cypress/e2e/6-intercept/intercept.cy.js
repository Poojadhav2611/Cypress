describe('Intercept in cypress', function () {

    // it('Test case -1',function(){
    //     cy.visit('https://example.cypress.io/commands/network-requests')
    //     cy.contains('Get Comment').click()
    //     cy.wait('2000')
    //     cy.get('.network-comment').should('contain','audantium enim quasi ')
    // })

    it('Test case -2', function () {

        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-btn').first().click()
        // cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function (info) {
            cy.log(info)
            cy.expect(info.response.statusCode).to.eq(200)
            cy.get('.network-comment').should('contain','audantium enim quasi ')
        })
    })

    it('Test case -3', function () {

        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function (info) {
            cy.log(info)
            cy.expect(info.response.statusCode).to.eq(200)
            cy.get('.network-comment').should('have.text',info.response.body.body)
        })


    })

    it.only('Test case -4', function () {

        let Text=undefined

        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        })

        .then(function(info){
           Text= info.body.body
           cy.visit('https://example.cypress.io/commands/network-requests')
           cy.contains('Get Comment').click()
           cy.get('.network-comment').should('have.text',Text)
        })
        // .then(function(){
        //     cy.visit('https://example.cypress.io/commands/network-requests')
           
        // })

        
    })

    

})