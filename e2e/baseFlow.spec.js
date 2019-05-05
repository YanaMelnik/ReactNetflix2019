describe('First test', () => {
  it('success', () => {
    cy.visit('http://localhost:8080/');
    cy.get('footer.footer')
  });
});
