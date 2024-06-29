///<reference types="cypress"/>

describe('Page Object Model',function(){
    it('POM',function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.get('.search-button').click()
        cy.get('h4[class="product-name"]').each(function(el,index){
            cy.log(el.text())
            // cy.get('.product-action')
            if(el.text()=="Cashews - 1 Kg"){
                cy.get('[class="product-action"]>button').eq(index).click({ force: true })
                cy.get('[alt="Cart"]').click()
                cy.get('[class="action-block"]> button').first().click()
                cy.contains('Place Order').click()
                cy.get('select').select('India')
                cy.get('.chkAgree').click()
                cy.contains('Proceed').click()
                cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible')
                // cy.get('select').select('India')

                




            }
        })

    })
})