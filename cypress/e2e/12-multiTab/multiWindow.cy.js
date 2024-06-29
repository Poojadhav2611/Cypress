///<reference types="Cypress"/>
describe('Verify multi Window Tab', function () {
    it('verify href property of multitab-letkode', function () {
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('#opentab').should('have.attr', 'href').and('include', '/courses')
    })

    it('verify mullti tab by removing target', function () {
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('contain', '/courses')
    })

    it('verify by using .then', function () {
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('#opentab').then(function (newTab) {
            let url = newTab.prop('href')
            cy.visit(url)
            cy.url().should('contain', '/courses')

        })
    })

    it('verify multi window property', function () {
        cy.visit('https://www.letskodeit.com/practice')

        cy.window().then(function (win) {
            cy.stub(win, 'open').callsFake((url) => {
                win.location.href = url
            })
        })
        cy.get('#openwindow').click()
        cy.url().should('contain', '/courses')
    })

    it('verify multi window property in rahul shetty Website', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.window().then(function (winObj) {
            cy.stub(winObj, 'open').callsFake((url) => {
                winObj.location.href = url
            })
        })
        cy.get('#openwindow').click()
        cy.url().should('contain', 'qaclickacademy')
    })

    it('verify multi tab in rahul shetty website', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then(function (newTab) {
            let url = newTab.prop('href')
            cy.visit(url)
            cy.url().should('contain', 'qaclickacademy')
        })
    })

    it.only('verify multi tab in rahul shetty website by removing target', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click()
            cy.url().should('contain', 'qaclickacademy')
    })

})