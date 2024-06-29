/// <reference  types = 'cypress'/>
describe('mouse', function () {

    it.only('Scrolling Page', function () {

        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')
        cy.wait(Math.random() * 5000);

    })
})