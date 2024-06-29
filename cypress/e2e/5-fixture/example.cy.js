import example2 from '../../fixtures/example2.json';

// let Pooja={
//     firstName:"Pooja",
//     lastName:"Jadhav",
//     email:"Pooja@gmail.com",
//     msg:"Learning Automation Testing"
// }

// before(function () {

//     cy.fixture('example2').as('data')

// })

// before(() => {

//     cy.fixture('example2').as('data')

// })

before(() => {

    cy.fixture('example').as('data')

})

// beforeEach(function () {

//     cy.fixture('example2').then(function (data) {
//         this.data = data
//     })

// })




// describe('Using One Object',function(){

//     it('object',function(){
//         cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
//         cy.get('input[name="first_name"]').type(Pooja.firstName)
//         cy.get('input[name="last_name"]').type(Pooja.lastName)
//         cy.get('input[name="email"]').type(Pooja.email)
//         cy.get('textarea[name="message"]').type(Pooja.msg)
//         cy.get('input[type=submit]').click();

//     })
// })


// let Contact = [
//     {
//         firstName: "Pooja",
//         lastName: "Jadhav",
//         email: "psj@gmail.com",
//         msg: "learning Js"
//     },
//     {
//         firstName: "Pari",
//         lastName: "Jadhav",
//         email: "pari@gmail.com",
//         msg: "learning Java"
//     },

//     {
//         firstName: "Abhi",
//         lastName: "Jadhav",
//         email: "abhi@gmail.com",
//         msg: "learning AR"
//     },


// ]

// describe('using an array of object but geeting one test case whether we are passing 3 objects', function () {
//     it('Array', function () {
//         Contact.forEach(function (el) {
//             cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
//             cy.get('input[name="first_name"]').type(el.firstName)
//             cy.get('input[name="last_name"]').type(el.lastName)
//             cy.get('input[name="email"]').type(el.email)
//             cy.get('textarea[name="message"]').type(el.msg)

//         })


//     })


// })



// describe('using array of objects and getting right testcase', function () {
//     Contact.forEach(function(el,index){
//         it(`array- ${index+1}`, function () {
//             cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
//             cy.get('input[name="first_name"]').type(el.firstName)
//             cy.get('input[name="last_name"]').type(el.lastName)
//             cy.get('input[name="email"]').type(el.email)
//             cy.get('textarea[name="message"]').type(el.msg)

//         })
//     })

// })

// describe('reading the fixture file for one test case', function () {
//     it('for one test case', function () {
//         cy.fixture('example').then(function (el) {
//             cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
//             cy.get('input[name="first_name"]').type(el.firstName)
//             cy.get('input[name="last_name"]').type(el.lastName)
//             cy.get('input[name="email"]').type(el.email)
//             cy.get('textarea[name="message"]').type(el.comments)

//         })
//     })
// })


// describe('fixtures in cypress', function () {
//     it.only('Reading the fixture file using before block for Obj-1(function declaration)', function () {
//         cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
//         // cy.log(this.data)
//         cy.get('input[name="first_name"]').type(this.data[0].firstName)
//         cy.get('input[name="last_name"]').type(this.data[0].lastName)
//         cy.get('input[name="email"]').type(this.data[0].email)
//         cy.get('textarea[name="message"]').type(this.data[0].msg)

//     })

//     it.only('Reading the fixture file using before block for Obj-1(function declaration)', function () {
//         cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
//         // cy.log(this.data)
//         cy.get('input[name="first_name"]').type(this.data[1].firstName)
//         cy.get('input[name="last_name"]').type(this.data[1].lastName)
//         cy.get('input[name="email"]').type(this.data[1].email)
//         cy.get('textarea[name="message"]').type(this.data[1].msg)

//     })
// })

// describe('fixtures in cypress', function () {
//     it('Reading the fixture file using before block and using arrow function', function () {

//         cy.get('@data').then(function(data){
//             cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
//         cy.get('input[name="first_name"]').type(this.data[0].firstName)
//         cy.get('input[name="last_name"]').type(this.data[0] .lastName)
//         cy.get('input[name="email"]').type(this.data[0].email)
//         cy.get('textarea[name="message"]').type(this.data[0].msg)

//         })

//     })

//     it('Reading the fixture file using before block and using arrow function', function () {
//         cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
//         cy.get('input[name="first_name"]').type(this.data[1].firstName)
//         cy.get('input[name="last_name"]').type(this.data[1].lastName)
//         cy.get('input[name="email"]').type(this.data[1].email)
//         cy.get('textarea[name="message"]').type(this.data[1].msg)
//     })
// })


// describe('fixture in cypress', function () {
//     it('reading texture file using before each block for obj-1', function () {
//         cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
//         cy.get('input[name="first_name"]').type(this.data[0].firstName)
//         cy.get('input[name="last_name"]').type(this.data[0].lastName)
//         cy.get('input[name="email"]').type(this.data[0].email)
//         cy.get('textarea[name="message"]').type(this.data[0].msg)
//     })


//     it('Reading the fixture file using before block and using arrow function', function () {
//         cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
//         cy.get('input[name="first_name"]').type(this.data[1].firstName)
//         cy.get('input[name="last_name"]').type(this.data[1].lastName)
//         cy.get('input[name="email"]').type(this.data[1].email)
//         cy.get('textarea[name="message"]').type(this.data[1].msg)
//     })
// })


describe('fixture in cypress', function () {
    it('Reading file using import for obj-1', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(example2[0].firstName)
        cy.get('input[name="last_name"]').type(example2[0].lastName)
        cy.get('input[name="email"]').type(example2[0].email)
        cy.get('textarea[name="message"]').type(example2[0].msg)
    })

    it('Reading file using import for obj-1', function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(example2[1].firstName)
        cy.get('input[name="last_name"]').type(example2[1].lastName)
        cy.get('input[name="email"]').type(example2[1].email)
        cy.get('textarea[name="message"]').type(example2[1].msg)
    })

    it.only('Reading file using before block and arrow function for data-@', function () {
        cy.get('@data').then(function () {
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

            cy.get('input[name="first_name"]').type(this.data.firstName)
            cy.get('input[name="last_name"]').type(this.data.lastName)
            cy.get('input[name="email"]').type(this.data.email)
             cy.get('textarea[name="message"]').type(this.data.comments)

        })
    })
})

