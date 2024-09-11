
describe('CSSLocators', ()=> {

    it("CssLocators", ()=> {

        cy.visit("https://www.daraz.pk/")

        cy.get("#q").type("T-shirts")  //id tag is optional

        cy.get(".search-box__button--1oH7").click()

        cy.get(".JrAyI").contains("T-shirts")   //Assertion
        
    })
})

