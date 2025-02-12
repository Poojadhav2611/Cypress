/// <reference types="cypress" />

function calculateAge(id, total) {
    let sum=0;
    cy.get(`#t0${id}`).find('tr').each(function (row) {
        sum = sum + Number(row.find('td').last().text())
        cy.log(sum)
    })
        .then(function () {
            expect(sum).to.eq(total)
        })


}


describe('table in cypress', function () {
    // it('verify sum of age -table 1', function () {
    //     let sum=0
    //     cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    //     cy.get('#t01').find('tr').each(function (row) {
    //         // cy.get(row.find('td').last().text())
    //         // cy.log(row.find('td').last ().text())
    //         sum=sum+Number(row.find('td').last().text())
    //         cy.log(sum)
    //     })
    //     .then(function(){
    //         expect(sum).to.eq(159)
    //     })

    // })


    // it('sum for table -2',function(){
    //     let sum=0
    //     cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    //     cy.get('#t02').find('tr').each(function(row){
    //         // cy.get(row.find('td').last().text())
    //         sum=sum+Number(row.find('td').last().text())
    //         cy.log(sum)

    //     })
    //     .then(function(){
    //         expect(sum).to.eq(163)
    //     })
    // })

    it('sum 0f table -1', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        calculateAge(1, 159)
    })

})
















// /// <reference types="cypress" />

// describe('tables in cypress', function () {

//     function calculateAge(id, expectedTotal) {
//         let sum = 0
//         cy.get(`#t0${id}`).find('tr').each(function (row) {
//             //cy.log(row.find('td').last().text())
//             sum = sum + Number(row.find('td').last().text())
//         })
//             .then(function () {
//                 cy.log(sum)
//                 expect(sum).to.eq(expectedTotal)
//             })
//     }

//     it('verify the sum of table columns - table 1', function () {
//         let sum = 0
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         cy.get('#t01').find('tr').each(function (row) {
//             //cy.log(row.find('td'). ().text())
//             sum = sum + Number(row.find('td').last().text())
//         })
//             .then(function () {
//                 cy.log(sum)
//                 expect(sum).to.eq(159)
//             })
//     })


//     it('verify the sum of table columns - table 2', function () {
//         let sum = 0
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         cy.get('#t02').find('tr').each(function (row) {
//             //cy.log(row.find('td').last().text())
//             sum = sum + Number(row.find('td').last().text())
//         })
//             .then(function () {
//                 cy.log(sum)
//                 expect(sum).to.eq(163)
//             })
//     })

//     it.only('verify the sum of table columns - table 1 using function', function () {
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         calculateAge(1, 159)
//     })

//     it.only('verify the sum of table columns - table 2 using function', function () {
//         let sum = 0
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         calculateAge(2, 163)
//     })


// })