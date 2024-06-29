describe('Testing with Various Configuration Files', () => {
    it('Visits the Application Based on Config File', () => {
        // cy.visit(Cypress.env('prod_url'))
        cy.visit(Cypress.env('stage_url'))
        cy.log(Cypress.env('username'))
        // cy.log(" Printing the username "
        //     + Cypress.env('username'))

    });
});