import contactUs from "../9-POM/contactUs"

describe('contact us form', function () {

    let contact = new contactUs

    it('contact us with data', function () {

        contact.VisitUrl(contact.selector.contactURL)
        contact.submitData('Pooja', 'Jadhav', 'pooja@gmail.com', 'learning js')


    })

    it('reset data', function () {
        contact.VisitUrl(contact.selector.contactURL)
        contact.resetData('Pooja', 'Jadhav', 'pooja@gmail.com', 'learning js')
    })
})