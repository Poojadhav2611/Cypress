class orangeHRM{

    selectors={
        url:'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        username:'[name="username"]',
        password:'[name="password"]',
        submitBtn:'[type="submit"]'

    }

    VisitUrl(url){
        cy.visit(url)
    }


    validData(orangeData){
        cy.get(this.selectors.username).type(orangeData.username)
        cy.get(this.selectors.password).type(orangeData.password)
        cy.get(this.selectors.submitBtn).click()
    }
}

export default orangeHRM