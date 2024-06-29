///<reference types= "cypress"/>

describe('verfiy element of document ',function(){
    it('using jquery',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function($iframe){
        // cy.log($iframe)
       let iframeBody= $iframe.contents().find('body')
       cy.wrap(iframeBody).as('iFrame')
       cy.get('@iFrame').find('a[href= "index.html"]').should('have.text','Home')
        })
        
    })

    it('using javascript',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function(iframe){
            let iFrameBody=iframe[0].contentDocument.body
            cy.wrap(iFrameBody).as('iframe')
            cy.get('@iframe').find('a[href= "index.html"]').should('have.text','Home')


        })
    })

    it('using its',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        let frame = cy.get('#frame').its('0.contentDocument.body').then(cy.wrap)
        frame.find('a[href= "index.html"]').should('have.text',"Home")
    })

    it('using its-1',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.getFrameBody('frame').find('a[href= "index.html"]').should('have.text',"Home")
    })

    it.only('using its-2',function(){
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.getFrameBody('mce_0_ifr').find('p').should('have.text',"Your content goes here.")
    })

    
    // it.only('using its-3',function(){
    //     cy.visit('https://the-internet.herokuapp.com/iframe')
    //     cy.getFrameBody('mce_0_ifr').find('p').should('have.text',"Your content goes here.")
    //     cy.getFrameBody('mce_0_ifr').find('p').type(`{ctrl+a}{ctrl+b}`)
    //     cy.get('strong').first().should('have.text','Your content goes here.')
    // })

    it.only('iframe 5 - javascript',function(){
        cy.visit('https://the-internet.herokuapp.com/tinymce')
        cy.getFrameBody('mce_0_ifr').find('p').as('iFrame')
        .should('have.text','Your content goes here.')
        cy.getFrameBody('mce_0_ifr').find('p').type(`{ctrl+a}{ctrl+b}`)
        // cy.get('strong').should('have.text','Your content goes here.')
        cy.get('@iFrame').find('strong').should('have.text','Your content goes here.')
        
    })
    
})