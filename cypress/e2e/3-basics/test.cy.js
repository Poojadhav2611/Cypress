{/* <reference types="cypress" /> */ }

// test scenario - 1
describe('validate the login functionality', function () {

    // test case 1
    it('login with valid crendentials', function () {

        // arrangement 
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // actions
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        // assertion
        cy.get('img[alt="client brand banner"]').should('be.visible') // Corrected assertion selector


    })

    it.only('login with invalid credentials',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[placeholder="Username"]').type('Admin')
        cy.get('[placeholder="Password"]').type('Admin123')
        cy.get('button[type="submit"]').click()
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('be.visible')

    })
})
