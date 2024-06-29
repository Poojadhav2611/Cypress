///  <reference types="cypress"/>

describe('Verify the assertions',function(){
    
   beforeEach(function(){
    cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
   })

   it('implicit assertion',function(){
    cy.get('#coffee').should('have.text','Coffee')
    cy.get('#coffee').should('have.attr','id','coffee')
    cy.get('#coffee').then(function(el){
        cy.log(el)
        cy.log(el.text())

        //Explicit Assertions
        expect(el.text()).to.eq('Coffee')

    })

   })
   it.only('looping throgh over elements',function(){
    let givenArray = ["Fruits","Apple","Banana","Blackberries","Cherries","Figs","Vegetables","Asparagus","Broccoli","Kidney beans","Lentils"]

    cy.get('.traversal-food-list').children().each(function(el,index){
        cy.log(el.text())

        expect(el.text()).to.eq(givenArray[index])

    })

})

})



// /// <reference types="cypress" />

// describe('verify the assertions ',function(){
//     beforeEach(function(){
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//      })

//      it('implicit assertion',function(){
//         cy.get('#tea').should('have.text','Tea')
//         cy.get('#tea').should('have.attr','id','tea')
//         cy.get('#tea').then(function(el){
//             // element
//             cy.log(el)
//             // element
//             cy.log(el.text())
//             // explicit assertionn
//             expect(el.text()).eq('Tea')
//         })
//         //<li id="tea">Tea</li>

//         // promise
//      })


//      it('loop through elements',function(){
//         // array 
//         let expectedArray = ["Coffee","Tea","Milk","Espresso","Sugar"]
//        cy.get('.traversal-drinks-list').children().each(function(el,index){
//             //cy.log(el.text())
//             expect(el.text()).to.eq(expectedArray[index])
//        })
//      })
     


// })