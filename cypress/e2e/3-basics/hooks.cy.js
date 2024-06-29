
{/* <reference types="cypress"/> */}

before(function(){
    cy.log("Execute ----A ")
})

beforeEach(function(){
    cy.log("I will execute before every test case")
})

it('test case one',function(){
    cy.log("test one executed")
})

it('test case two',function(){
    cy.log("test case two")
})

afterEach(function(){
    cy.log("I will run after every test case")
})

after(function(){
    cy.log("Last-----Z")
})
