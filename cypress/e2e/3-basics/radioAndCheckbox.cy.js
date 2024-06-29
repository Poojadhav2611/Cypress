
/// <reference types="cypress"/>

describe('verify functionality radio buttons', function () {
    this.beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })


    it('verify radio button', function () {
        cy.get('input[value="green"]').click()
        cy.get('input[value="green"]').should('be.checked')
        cy.get('input[value="blue"]').should('not.be.checked')

        cy.get('input[value="green"]').as('greenRadio')
        cy.get('@greenRadio').check()
        cy.get('@greenRadio').should('be.checked')


        cy.get('#radio-buttons').children().filter('input[type="radio"]').each(function (el) {
            cy.wrap(el).check()
            cy.wrap(el).should('be.checked')
        })


        cy.get('#radio-buttons').children().filter('input[type="radio"]').each(function (el) {
            cy.get(el).check()
            cy.get(el).should('be.checked')
        })
    })


    // it.only('verify the functionality of checkboxes', function () {
    //     cy.get('#checkboxes').should('exist')
    // });

    it('verify the functionality of check box', function () {
        cy.get('input[type="checkbox"]').each(function (el) {
            cy.wrap(el).check().should('be.checked')
            cy.wrap(el).uncheck().should('not.be.checked')
        })
    })


    it('verify the functionality of checkbox with click', function () {
        cy.get('input[type="checkbox"]').each(function (el, index) {
            if (index !== 2) {
                cy.wrap(el).click()
            }
        })

    })

    it.only('verify the functionality with multiple', function () {
        cy.get('input[type="checkbox"]').check(['option-1', 'option-2', 'option-3', 'option-4'])
    })

    it.only('selecting a dropdown', function () {
        cy.get('#dropdowm-menu-1').select('Python')//text
        cy.get('#dropdowm-menu-1').select('python')//value attribute

    })

    it.only('selecting the dropdown -one ', function () {
        let selection = ["java", "maven", "css"]
        cy.get('.section-title').first().find('select').each(function (el, index) {
            cy.wrap(el).select(selection[index])
        })
    })
    it.only('selecting disabled enabled and selected radio button', function () {

        cy.get('input[value="cabbage"]').should('be.disabled')
        cy.get('input[value = "lettuce"]').should('not.be.disabled')
        cy.get('input[value="pumpkin"]').should('be.checked')


    })


})



