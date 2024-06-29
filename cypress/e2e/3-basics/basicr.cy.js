/// <reference types="cypress"/>

describe('learn basic commands',function(){
    it('how to get the title',function(){
        cy.visit('https://www.google.co.in/')
        cy.title().should('contain','Google')
    })


    it('how to get the currect url in cypress',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.url().should('contain',"contactus")
    })

    it('how to get elements in ',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
         // how to get one element 
         cy.get('h2[name="contactme"]').should('have.attr','class','section_header')
         cy.contains('CONTACT US').should('have.attr','name','contactme')
          // how to multiple elements 
        cy.get('input[name]').should('have.length',3)
     })

     it('how to get elements in cypress',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('label').contains('Option 1').should('be.visible')
        cy.get('label').contains('Option 2').should('be.visible')
    })

it('how to get elements in cypress',function(){

cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
cy.wait(2000)
cy.log('2 sec wait over')
cy.get('label').contains('Option 2').should('be.visible')
cy.log("assertion done")
cy.reload()
cy.log("reload done")
})

it.only('how to log on cypress test runner',function(){
    cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    cy.log("before radio button")
    // how to find element
    // Css selector
    cy.get('input[value= "green"]').click()
    cy.contains('Green').should('be.visible')
    cy.get('label').contains('Option 4').should('be.visible')
    cy.contains('label',"Option 3").should('be.visible')
    cy.log("after radio button")
})

    
})