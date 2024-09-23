describe('My First Test', () => {

    it('verify titile-positive', () => {
      
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.title().should('eq', 'OrangeHRM')


    })

    


    it('verify titile-negative', () => {
      
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.title().should('eq', 'OrangeHRM123')

 
    })


    it('verify titile-negative', () => {
      
        cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.title().should('eq', 'OrangeHRM888')

        
    })


    


  })


