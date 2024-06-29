///<reference types="cypress"/>

import data from '../9-POM/orangeHRM'
import fixtureData from "../../fixtures/orange.json"

describe('login functionality',function(){

    let orange= new data;
    it('login with valid credentials',function(){
        orange.VisitUrl(orange.selectors.url)
        orange.validData(fixtureData.valid)  
    })
    it('login with Invalid credentials',function(){
        orange.VisitUrl(orange.selectors.url)
        orange.validData(fixtureData.invalid)  
        cy.get('.oxd-alert-content ').should('have.text','Invalid credentials')
    })
})