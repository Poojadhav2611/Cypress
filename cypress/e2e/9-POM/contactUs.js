 class contactUs {

    selector = {
        contactURL:'https://webdriveruniversity.com/Contact-Us/contactus.html',
        heading: 'h2',
        firstName: "input[name='first_name']",
        lastName: "input[name='last_name']",
        email: "input[name='email']",
        comments: "textarea[name='message']",
        resetBtn: "input[type='reset']",
        submitBtn: "input[type='submit']"
    }

    VisitUrl(url){
        cy.visit(url)
    }

    submitData(fn, ln, email, comments) {
        cy.get(this.selector.firstName).type(fn)
        cy.get(this.selector.lastName).type(ln)
        cy.get(this.selector.email).type(email)
        cy.get(this.selector.comments).type(comments)
        cy.get(this.selector.submitBtn).click()
    }
    resetData(fn, ln, email, comments) {
        cy.get(this.selector.firstName).type(fn)
        cy.get(this.selector.lastName).type(ln)
        cy.get(this.selector.email).type(email)
        cy.get(this.selector.comments).type(comments)
        cy.get(this.selector.resetBtn).click()
        cy.get(this.selector.firstName).type(" ")
        cy.get(this.selector.lastName).type(" ")
        cy.get(this.selector.email).type(" ")
        cy.get(this.selector.comments).type(" ")
    }

}

export default contactUs