describe("Assertions demo", ()=> {

    it("Implicit assertions", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //should and

        // cy.url().should('include', 'orangehrmlive.com')

        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        // cy.url().should('contain', 'orangehrm')

        
        cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangehrm')
        .and('not.contain','greenhrm')


        cy.title().should('include', 'Orange')
        .and('eq', 'OrangeHRM')
        .and('contain','HRM')


        cy.get('.orangehrm-login-branding > img').should('be.visible') //logo visible or not
        .and('exist')  //logo exist or not
        

        cy.get('a').should('have.length', 5) //no of links

        cy.get("input[placeholder='Username']").type("Admin") //provide a value in the input box
        cy.get("input[placeholder='Username']").should('have.value','Admin') //check value

        cy.get("input[placeholder='Password']").type("admin123")  //provide password value
        cy.get("input[placeholder='Password']").should('have.value','admin123') //verify password value

        cy.get('.oxd-button').click();
        cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")









    })
})

// 813.7 823.7  833.7 