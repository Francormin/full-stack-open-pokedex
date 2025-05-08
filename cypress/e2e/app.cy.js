/* global cy */

describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokemon and Pokemon character names are trademarks of Nintendo.')
  })
  it('pokemon page can be navigated to', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.contains('overgrow')
    cy.contains('chlorophyll')
  })
})
