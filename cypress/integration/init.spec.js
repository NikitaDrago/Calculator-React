describe('2e2', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
  })

  it('arithmetic operations', () => {
    cy.visit('/')
    cy.contains('9').click()
    cy.contains('+/-').click()
    cy.contains('+').click()
    cy.contains('2').click()
    cy.contains('5').click()
    cy.contains('=').click()
  })

  it('changing the theme', () => {
    cy.contains('Settings').click()
    cy.get('select').select('Dark Theme')
    cy.contains('Home').click()
    cy.get('button').contains('C').click()
  })
  it('clearing history', () => {
    cy.contains('Settings').click()
    cy.get('button').click()
    cy.contains('Home').click()
  })


})
