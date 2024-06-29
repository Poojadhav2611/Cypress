/// <reference types="cypress" />

describe('verify file upload in cypres', function () {
    it('verify file upload in cypress-1', function () {
       
        cy.visit('https://webdriveruniversity.com/File-Upload/index.html')
        cy.get('#myFile').selectFile('C:\\Users\\technOrbit\\Desktop\\Cypress2024\\cypress\\fixtures\\Error.png')
        cy.get('#submit-button').click()
        cy.on('window:alert',function(str){
            expect(str).to.eq('Your file has now been uploaded!')
            return true
        })
        cy.url().should('contain','Error')


    })

    it('verify the multiple file upload -2',function(){
        cy.visit('https://www.zoho.com/au/books/accounting-software-demo/#/salesorders/new')
        cy.get('input[type="file"]').first().selectFile(['C:\\Users\\technOrbit\\Desktop\\Cypress2024\\cypress\\fixtures\\Error.png','C:\\Users\\technOrbit\\Desktop\\Cypress2024\\cypress\\fixtures\\example.json'])
      cy.get('#ember379').should('contain',"2")
    //   cy.get('#ember378').should('contain',"2")

    })
})