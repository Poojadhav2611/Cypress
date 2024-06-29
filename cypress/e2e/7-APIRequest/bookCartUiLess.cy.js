/// <reference types="cypress"/>
import credentials from '../../fixtures/bookCart.json'

describe('UiLess Login', function () {
    credentials.forEach(function (ul) {
        it('UI less Login', function () {
            let userCredentials = {
                username: ul.Username,
                password: ul.Password
            };
            // cy.log('Request Body:', userCredentials); 

            cy.request({
                method: "POST",
                url: "https://bookcart.azurewebsites.net/api/login",
                body: userCredentials
            }).then(function (response) {
                cy.log(response)
                const Token = response.body.token;
                cy.log(Token)

                cy.visit('https://bookcart.azurewebsites.net/', {
                    
                    onBeforeLoad(browser) {
                      
                        browser.localStorage.setItem("authToken", Token)
                        
                    }
                   
                });
               
                cy.wait(3000); 
                cy.get('.mdc-button__label').eq(1).should('have.text', ` ${userCredentials.username}`);
            });
        })
    })
})
