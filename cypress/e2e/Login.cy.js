describe('Validate the login functionality', () => 
    {
        // Run this before each test to navigate to the login page
        beforeEach(() => 
            {
                cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            }
        );

        // it('should login successfully with valid credentials', () => 
        //     {

        //         cy.get("input[placeholder='Username']").type("Admin");

        //         cy.get("input[placeholder='Password']").type("admin123");

        //         cy.get("button[type='submit']").click();

        //         // Assertion to check for successful login

        //         cy.url().should('include', '/dashboard'); // Assuming '/dashboard' appears in URL upon successful login
        //     }
        // );

        // it('should fail to login with invalid credentials', () => 
        //     {

        //         cy.get("input[placeholder='Username']").type("Admin");

        //         cy.get("input[placeholder='Password']").type("admin");

        //         cy.get("button[type='submit']").click();

        //         // Assertion to check for error message

        //         cy.get('.oxd-alert-content-text').should('be.visible') // Update selector if necessary

        //         .and('contain', 'Invalid credentials'); // Expected error message text

        //     }
        // );

        it('should display an error when both username and password are empty', () =>
            
            {

                // Click the submit button without entering any credentials

                cy.get("button[type='submit']").click();
    
                // Wait for the error message to appear

                 cy.get('.oxd-input-field-error-message', { timeout: 100000 }) // Wait up to 10 seconds

                .should('be.visible');
    
                // Check for the "Required" message below the Username field

                cy.get('input[name="username"]')

                .parent() // Move to parent element

                .find('.oxd-input-field-error-message') // Find the error message within the parent

                .should('be.visible')

                .and('contain', 'Required');
    
                // Check for the "Required" message below the Password field

                cy.get('input[name="password"]')

                .parent()

                .find('.oxd-input-field-error-message')

                .should('be.visible')

                .and('contain', 'Required');
            }
    );

        // it('should display an error when username field is empty', () => 
        //     {
            
        //         cy.get("input[placeholder='Password']").type("admin123");
            
        //         cy.get("button[type='submit']").click();
            
        //         cy.get('.oxd-alert-content-text').should('be.visible')
            
        //         .and('contain', 'Username cannot be empty'); // Update the message text if needed
    
        //     }
        // );
        
    }
);
