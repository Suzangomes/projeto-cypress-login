describe('Teste de Login', () => {

  it('Deve acessar a página de login com sucesso', () => {

    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.title').should('have.text', 'Products')

  })

  it('Deve exibir erro ao inserir login inválido', () => {

    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('usuario_errado')
    cy.get('#password').type('senha_errada')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('be.visible')

  })

})