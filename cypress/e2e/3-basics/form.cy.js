/// <reference types="cypress" />

describe('verify the contact us form',function(){

    this.beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    })
    
    it('verify the contact form with valid details',function(){

        cy.get('input[name="first_name"]').type("Pooja")
        cy.get('input[name="last_name"]').type("Jadhav")
        cy.get('input[name="email"]').type("Pooja@gmail.com")
        cy.get('textarea[name="message"]').type("Pooja")
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('be.visible').and('have.text','Thank You for your Message!')
    })


    it('verify the contact form with Invalid details',function(){
        cy.get('input[name="first_name"]').type("Pooja")
        cy.get('input[name="last_name"]').type("Jadhav")
        cy.get('input[name="email"]').type("Poojagmail.com")
        cy.get('textarea[name="message"]').type("Pooja")
        cy.get('input[type="submit"]').click()
        cy.get('body').should('contain',"Invalid")
    
    })

    it('verify the contact form reset button',function(){
        cy.get('input[name="first_name"]').type("Pooja")
        cy.get('input[name="last_name"]').type("Jadhav")
        cy.get('input[name="email"]').type("Pooja@gmail.com")
        cy.get('textarea[name="message"]').type("Pooja")
        cy.get('input[type="reset"]').click()

        cy.get('input[name="first_name"]').should('have.text',"")
        cy.get('input[name="last_name"]').should('have.text',"")
        cy.get('input[name="email"]').should('have.text','')
        cy.get('textarea[name="message"]').should('have.text','')


        
    })

    it('verify the contact form title',function(){
        cy.get('[name="contactme"]').title('CONTACT US')
    })
})

