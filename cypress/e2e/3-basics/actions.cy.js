///<reference types= "cypress"/>

describe('actions in cypress',function(){
    it('drag and drop',function(){
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove',{which:1}).trigger('mouseup',{force:true})
        cy.get('#droppable').should('contain',"Dropped!")
   
    })
    it('verify doubleclick',function(){
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        // cy.get('#double-click').dblclick().should('have.class','double')
        cy.get('#double-click').trigger('dblclick').should('have.class','double')

    })

    it('right click',function(){
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        cy.get('.context-menu-one').first().rightclick()
        cy.get('.context-menu-list').should('be.visible')
    })

    it('verify hover in cypress',function(){
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('.hover > .dropbtn').trigger('mouseover').click()
        cy.get('.list-alert').first().should('have.text','Link 1')
    })

    it('verify mouse ',function(){
        cy.visit('https://demo.opencart.com/')
        cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(1) > a').should('not.be.visible')
        cy.get('#narbar-menu > ul > li:nth-child(1) > a').trigger('mouseover').click()
        cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(1) > a').should('be.visible')
    })

    it('scroll',function(){
        cy.visit('https://webdriveruniversity.com/index.html')
        cy.get('#popup-alerts').scrollIntoView({duration:2000})

    })

    it('click and hold',function(){
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('#click-box').find('p').should('have.text','Click and Hold!')
        cy.get('#click-box').trigger('mousedown',{button:0})
        cy.get('#click-box').should('contain','Well done')
        cy.get('#click-box').trigger('mouseup',{button:0})
        cy.get('#click-box').should('have.text','Dont release me!!!')
    })

    it.only('Autosuggestive drop down',function(){
        cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list').children().each(function(el){
            cy.log(el.text())

            if(el.text().includes('Avacado')){
                cy.wrap(el).click()
            }
        })
        cy.get('#submit-button').click()
        cy.url().should('contain',"Avacado")
    })


})