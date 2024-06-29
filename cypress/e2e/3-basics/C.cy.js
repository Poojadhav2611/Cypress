describe('manage datepicker in cypress using js', function () {
    it('date-picker in js', function () {
        cy.visit('https://webdriveruniversity.com/Datepicker/index.html')
        let date = new Date()
        date.setDate(date.getDate() + 500)

        cy.log(date.getFullYear())
        cy.log(date.getMonth())
        cy.log(date.getDate())

        // cy.log(date.toLocaleString("default",{month:"long"}))

        let fullYear = date.getFullYear()
        let month = date.toLocaleString("default", { month: "long" })
        let day = date.getDate()

        cy.log(fullYear)
        cy.log(month)
        cy.log(day)

        cy.get('#datepicker').click()

        function selectMonthYear() {
            cy.get('.datepicker-switch').first().then(function (givenDate) {
                // cy.log(givenDate.text())
                if (!givenDate.text().includes(fullYear)) {
                    cy.get('.next').first().click()
                    selectMonthYear();
                }

            }).then(function () {
                cy.get('.datepicker-switch').first().then(function (givenDate) {
                    // cy.log(givenDate.text())
                    if (!givenDate.text().includes(month)) {
                        cy.get('.next').first().click()
                        selectMonthYear();
                    }

                })


            })



        }

        function selectdate() {
            cy.contains(day).click()
        }

        selectMonthYear()
        selectdate()





    })
})