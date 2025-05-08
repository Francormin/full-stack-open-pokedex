/* global cy */

describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
  it('pokemon page can be navigated to', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.contains('overgrow')
    cy.contains('chlorophyll')
  })
  it('can go back to home page from pokemon page', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.get('.links').contains('a','Home').click()
    cy.location('pathname').should('eq', '/')
  })
  it('can go to next pokemon page from pokemon page', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.get('.links').contains('a','Next').click()
    cy.location('pathname').should('eq', '/pokemon/venusaur')
  })
})
