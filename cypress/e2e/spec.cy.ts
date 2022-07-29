// describe('empty spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

context("Search", () => {

  it("Enters the search page and tries to search a cep", () => {
    cy.visit('http://localhost:3000')
    cy.viewport(1440, 900)
    cy.get("input").type('87010340')
    cy.get("button").click();
  })

})