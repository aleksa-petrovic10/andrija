describe("Login test", () => {
    it('Visit gallery page', () => {
        cy.visit('/') 
    })
    it("Click on login button", () => {
        cy.get("a[href='/login']").click()
    })
    it ('Login with valid credentials', () => {
        cy.get('#email').type('pr@gmail.com')
        cy.get('#password').type('11111111')
        cy.get('button').click()
    })
    it ('Logout', () => {
        cy.get('.ml-auto > :nth-child(3) > .nav-link').click()
    })
})