class auto {
    selectors = {
        autoUrl: "https://automationexercise.com/",
        signUp: 'a[href="/login"]',
        name: 'input[placeholder="Name"]',
        email: 'input[data-qa="signup-email"]',
        signUpBtn: '.btn ',
        titleMR: '#id_gender1',
        titleMrs: '#id_gender2',
        password: 'label[for="password"]',
        days: '#days',
        months: '#months',
        year: '#years',
        checkbox1: '#newsletter',
        checkbox2: '#optin',
        firstName: '#first_name',
        lastName: '#last_name',
        company: '#company',
        address: '#address1',
        address2: 'optin',
        country: '#country',
        state: '#state',
        city:'#city',
        zipcode: '#zipcode',
        mobileNumber: '#mobile_number',
        createAcc:' [data-qa="create-account"]',
        acccreated:'h2[data-qa="account-created"]',
        continue:'[data-qa="continue-button"]',
        logout:'a[href="/logout"]',
        validateUser:'a>b',
        loginEmail:'[data-qa="login-email"]',
        loginPassword:'input[data-qa="login-password"]',
        loginSubmit:'[data-qa="login-button"]'

    }
    visitUrl(url) {
        cy.visit(this.selectors.autoUrl)
    }

    signUpClick(signUp) {
        cy.get(this.selectors.signUp).click()
    }

    newUserSIgnUp(user) {
        cy.log(user)
        cy.get(this.selectors.name).type(user.name, { force: true })
        cy.get(this.selectors.email).type(user.email, { force: true })
        cy.get(this.selectors.signUpBtn).eq(1).click({ force: true })
        
    }

    accountInformation(title,user){
        cy.get(title).check()
        cy.get(this.selectors.password).type(user.password)
        cy.get(this.selectors.days).select(user.days)
        cy.get(this.selectors.months).select(user.months)
        cy.get(this.selectors.year).select(user.year)
        cy.get(this.selectors.checkbox1).check()
        cy.get(this.selectors.checkbox2).check()
        cy.get(this.selectors.firstName).type(user.firstName)
        cy.get(this.selectors.lastName).type(user.lastName)
        cy.get(this.selectors.address).type(user.address)
        cy.get(this.selectors.country).select(user.country)
        cy.get(this.selectors.state).type(user.state)
        cy.get(this.selectors.city).type(user.city)
        cy.get(this.selectors.zipcode).type(user.zipcode)
        cy.get(this.selectors.mobileNumber).type(user.mobileNumber)
        cy.get(this.selectors.createAcc).click()
        cy.get(this.selectors.acccreated).should('have.text',"Account Created!")
        cy.get(this.selectors.continue).click()
    }
    
    loginUser(user){
        cy.get(this.selectors.loginEmail).type(user.email)
        cy.get(this.selectors.loginPassword).type(user.password)
        cy.get(this.selectors.loginSubmit).click()

    }

    validateLoginUser(user){
        cy.get(this.selectors.validateUser).should('contain',user.name)

    }

    logout(){
        cy.get(this.selectors.logout).click()
    }
}
export default auto;
