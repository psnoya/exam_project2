describe('user can add items', () => {
    it('test', () => {
        cy.visit('http://localhost:3001')
        cy.get('#add-item').click()
        cy.get('#notes').type('Dont forget anything on the list')
        cy.get('#submit').click()
    })
})