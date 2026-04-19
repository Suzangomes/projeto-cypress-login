describe('Teste de Login', () => {
  it('Login inválido - deve mostrar erro', () => {
    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-email').type('email-invalido')

    cy.get('.action-form').submit()

    cy.url().should('include', 'actions')

    cy.get('.action-email')
      .should('have.value', 'email-invalido')

    cy.screenshot()
  })
})