///<reference types="cypress"/>

describe('List of Users', function () {
    let token = `4df8d1fd8032337bb6b755e1a4b37ac7f51174f4282a8bb9fd604f64addd9940`
    let id = undefined

    it('list of users', function () {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                "Authorization": "Bearer 4df8d1fd8032337bb6b755e1a4b37ac7f51174f4282a8bb9fd604f64addd9940"

            }
        }).then(function (response) {
            // cy.log(response)
        })
    })

    it('create,update and delete', function () {
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: {
                name: "Shiva Ramakrishna",
                gender: "male",
                email: `shiva.ramakrishna${Math.floor(Math.random() * 1000) + 1}@gmail.com`,
                status: "active"
            },
            headers: {

                "Authorization": `Bearer ${token}`

            }


        }).then(function (response) {
            cy.log(response)
            expect(response.status).to.eq(201)
            cy.log(response.body.id)
            id = response.body.id
        }).then(function () {
            cy.request({
                method: "PUT",
                url: `https://gorest.co.in/public/v2/users/${id}`,
                body: {
                    name: "Tenali Ramakrishna",
                    email: `pooja.jadhav${Math.floor(Math.random() * 10000) + 1}@gmail.com`,
                    status: "active"

                },
                headers: {
                    "Authorization": `Bearer ${token}`
                }

            }).then(function (response) {
                expect(response.status).to.eq(200)
            })
                
            }).then(function () {
                cy.request({
                    method: "DELETE",
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }).then(function (response) {
                    expect(response.status).to.eq(204)
                })

            })
        })
    })
