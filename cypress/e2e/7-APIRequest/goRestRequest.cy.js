import payload from '../../fixtures/payload.json';

describe('API with fixtures', function () {
    let token = `4df8d1fd8032337bb6b755e1a4b37ac7f51174f4282a8bb9fd604f64addd9940`
    let id = undefined
    it('Post data', function () {
        cy.log(payload.post)
        payload.post.email = `shiva.ramakrishna${Math.floor(Math.random() * 1000) + 1}@gmail.com`
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: payload.post,
            headers: {

                "Authorization": `Bearer ${token}`

            }
        }).then(function (response) {
            cy.log(response)
            expect(response.status).to.eq(201)
            cy.log(response.body.id)
            id = response.body.id
        }).then(function () {
            payload.put.email = `shiva.ramakrishna${Math.floor(Math.random() * 1000) + 1}@gmail.com`
            cy.request({
                method: "PUT",
                url: `https://gorest.co.in/public/v2/users/${id}`,
                body: payload.put,
                headers: {

                    "Authorization": `Bearer ${token}`

                }
            }).then(function (response) {
                expect(response.status).to.eq(200)
            })


        })
    })
})