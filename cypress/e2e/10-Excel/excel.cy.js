///<reference types= "cypress"/>

describe('Read data from excel sheet-Login Functionality', function () {

    it('login with excel credentials', function () {
        cy.parseXlsx('cypress/fixtures/Book1.xlsx').then(function(parseData){
            // cy.log(parseData[0].data[1])
            for(let i=1;i<parseData[0].data.length;i++){
                cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
                cy.get('[name="first_name"]').type(parseData[0].data[i][0])
                cy.get('[name="last_name"]').type(parseData[0].data[i][1])
                cy.get('[name="email"]').type(parseData[0].data[i][2])
                cy.get('[name="message"]').type(parseData[0].data[i][3])
                cy.get('[value="SUBMIT"]').click()
                cy.get('h1').should('have.text',"Thank You for your Message!")
            }

        })
    })
})