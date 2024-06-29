///<reference types="cypress"/>

describe('Date', () => {
    it('Date Picker Test Case', () => {
        cy.visit('https://jqueryui.com/datepicker/')
        cy.get('.demo-frame').then(function ($iframe) {
            let iframe = $iframe.contents().find('body')
            cy.wrap(iframe).as('iFrame')

            // Click the datepicker input field to open the datepicker
            cy.get('@iFrame').find('#datepicker').click()

            // Function to check and select date
            function selectDate(month, year, day) {
                cy.get('@iFrame').find('.ui-datepicker-title').then($title => {
                    const currentMonthYear = $title.text().trim()
            //         if (!currentMonthYear.includes(`${month} ${year}`)) {
            //             cy.get('@iFrame').find('.ui-datepicker-next').click()
            //             cy.wait(500)  // wait for the transition
            //             selectDate(month, year, day)  // Check again
            //         } else {
            //             cy.get('@iFrame').find('.ui-datepicker-calendar').contains(day).click()
                    }
            //     })
            //     selectDate('May', 2025, '13')

           
        })
    })
})
