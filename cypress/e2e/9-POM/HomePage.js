class HomePage{

    selector = {
        EcommUrl : 'https://rahulshettyacademy.com/seleniumPractise/#/',
        searchBox : '.search-keyword',
        searchBtn : '[class="search-button"]',
        productLst: 'h4[class="product-name"]',
        addtoCart: '[class="product-action"] button',
        cart : '[alt="Cart"]',
        proceedBtn : '[class="action-block"]> button',
        checkBox: '.chkAgree'
    }


    VisitUrl(url){
        cy.visit(url)
    }

    searchProduct(prod){
        cy.get(this.selector.searchBox).type(prod)
        cy.get(this.selector.searchBtn).click()
    }

    selectProduct(product){
        cy.get(this.selector.productLst).each((el, i) => {
            // 'Cashews - 1 Kg'
            let vegitable =  el.text().replace(' - 1 Kg', ' ').trim() // Cashews 
            if (vegitable == product) {
                cy.get(this.selector.addtoCart).eq(i).click({ force: true })

            }
        })
    }

    placeOrder(){
        cy.get(this.selector.cart).click()
        cy.get(this.selector.proceedBtn).first().click()
        cy.contains('Place Order').click()
        cy.get('select').select('India')
        cy.get(this.selector.checkBox).click()
        cy.get('button').click()
    }

    ValidateTxt(){
        cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible')

    }

}

export default HomePage