/// <reference types="cypress" />

beforeEach(function(){
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
})

describe('manage js alerts',function(){
    it('window:alert',function(){
        cy.on('window:alert',function(text){
            expect(text).to.eq('I am a JS Alert')
            return true 
        })
        cy.contains('Click for JS Alert').click()
        cy.get('#result').should('have.text','You successfully clicked an alert')

    })

    it.only('window:Confirm',function(){
        cy.on('window:confirm',function(text){
            expect(text).to.eq('I am a JS Confirm')
            return true;
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text',"You clicked: Ok")
    })

    it.only('window:Confirm',function(){
        cy.on('window:confirm',function(text){
            expect(text).to.eq('I am a JS Confirm')
            return false;
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text','You clicked: Cancel')
    })

    it.only('window:Prompt',function(){
        cy.on('window.prompt',function(win){
            cy.stub('win','prompt').returns('I am learning js')
            cy.contains('Click for JS Prompt').click()
            cy.get('#result').should('have.text','I am learning js')
        })
    })
})