describe('verify the file upload in cypress',function(){
    it('file upload',function(){
        let fileDemo="Error.png";
        cy.visit('https://webdriveruniversity.com/File-Upload/index.html')
        cy.get('#myFile').attachFile(fileDemo)
        cy.get('#submit-button').click()
        cy.on('window:alert',(text)=>{
          expect(text).to.eq('Your file has now been uploaded!')
        })
        cy.url().should('include',`?filename=${fileDemo}`)
    })
})