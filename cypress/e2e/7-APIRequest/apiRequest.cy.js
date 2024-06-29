///<reference types="cypress"/>

describe('API request', function () {
    // it('Get Request', function () {
    //     let found = false
    //     let expectedName = "Michael"
    //     cy.request({
    //         method: "GET",
    //         url: "https://reqres.in/api/users?page=2",
    //     }).then(function (res) {
    //         // cy.log(res)
    //         expect(res.body.data[0]).have.keys("id", "email", "first_name", "last_name", "avatar")
    //         res.body.data.forEach(function (response) {
    //             if (expectedName == response.first_name) {
    //                 found = true
    //             }
    //             expect(response.first_name).not.have.null
    //             expect(response.avatar).not.have.null
    //             expect(response.email).not.have.null
    //             expect(response.id).not.have.null
    //             expect(response.last_name).not.have.null

    //         })
    //         expect(found).to.eq(true)
    //         // expect(res.body.per_page).to.eq(res.body.data.length)
    //         // expect(res.duration).to.be.gte(700)
    //         // expect(res.status).to.eq(200)

    //     })

    // })
    it.only('Get Request', function () {
        let found = false
        let expectedName = "Michael"
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2",
        }).then(function (res) {
            // cy.log(res)
            expect(res.body.data[0]).have.keys("id", "email", "first_name", "last_name", "avatar")
            res.body.data.forEach(function (response) {

                expect(response.first_name).not.have.null
                expect(response.avatar).not.have.null
                expect(response.email).not.have.null
                expect(response.id).not.have.null
                expect(response.last_name).not.have.null

            });
            res.body.data.forEach(el => {
                if (el.first_name == expectedName) {
                    found = true
                }
            })

        }).then(function () {
            expect(found).to.eq(true)

        })

        // expect(res.body.per_page).to.eq(res.body.data.length)
        // expect(res.duration).to.be.gte(700)
        // expect(res.status).to.eq(200)

    })

})
it('Post Request', function () {
    let payload = {
        "name": "morpheus",
        "job": "leader"
    }
    cy.request({
        method: "POST",
        url: "https://reqres.in/api/users",
        body: payload
    }).then(function (res) {
        cy.log(res)
        expect(res.body).to.have.keys("name", "job", "id", "createdAt")
        expect(res.body.name).to.eq(payload.name)
        expect(res.body.job).to.eq(payload.job)
        expect(res.status).to.eq(201)


    })
})
it('Put Request', function () {
    let found = false;
    let payload =
    {
        "name": "Pooja",
        "job": "Software Tester"
    }

    cy.request({
        method: "PUT",
        url: "https://reqres.in/api/users/2",
        body: payload

    }).then(function (res) {
        cy.log(res)
        expect(res.body).to.have.keys("name", "job", "updatedAt")
        expect(res.status).to.eq(200)
        expect(res.name).to.eq()
        expect(res.name).not.have.null
        expect(res.job).not.have.null
        expect(res.updatedAt).not.have.null


    })



})
it('Delete Request', function () {
    cy.request({
        method: "DELETE",
        url: "https://reqres.in/api/users/2"
    }).then(function (res) {
        cy.log(res)
        expect(res.status).to.eq(204)
        expect(res.statusText).to.eq("No Content")

    })

})
