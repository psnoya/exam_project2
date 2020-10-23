describe("user can see message and quote", () => {
    it("test", () => {
        cy.visit("http://localhost:3001")
        cy.get("#quote").click()
        cy.get("#message")
    })
    
})