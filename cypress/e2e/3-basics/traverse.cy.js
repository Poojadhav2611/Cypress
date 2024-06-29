/// <reference types="cypress"/>

describe('traverse methods',function(){
    it('To get children of DOM elements, use the .children()',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().first().should('have.text','Fruits')
    })

    it('To get a DOM element at a specific index, use the .eq() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().eq(3).should('have.text','Blackberries')
    })

    it.only('To get the last DOM element within elements, use the .last() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().last().should('have.text','Lentils')
    })

    it('To get children of DOM elements, use the .children() command',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().should('have.length',5)

    })

    it('To get the previous sibling DOM element within elements, use the .prev() command',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#tea').prev().should('have.text','Coffee')
    })

    it('To get the previous sibling DOM element within elements, use the .next() command',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#espresso').next().should('have.text','Sugar')
    })

    

})