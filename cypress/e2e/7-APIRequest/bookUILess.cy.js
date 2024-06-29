/// <reference types="cypress"/>

describe('UiLess Login', function () {

    it('UI less Login', function () {
        let userCredentials = { username: "poojadhav@gmail.com", password: "Pooja@123" }
        cy.request("POST", "https://bookcart.azurewebsites.net/api/login", userCredentials)
            .its('status')
            .then(function (response) {
                cy.log(response)
                // cy.log(body.body.token)
                // const Token = response.body.token

            //     cy.visit('bookcart.azurewebsites.net', {
            //         onBeforeLoad(browser) {
            //             browser.localStorage.setItem("authToken", Token)
            //         }
            //     })
            //     cy.get('.mdc-button__label').eq(1).should('have.text',` ${userCredentials.username}`)


            })
    })
})