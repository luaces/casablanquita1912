describe('Home', () => {
  before(() => {
    cy.visit('https://casablanquita-2859c.web.app//');
  });

  it('displays title', () => {
    cy.get('h1')
      .contains('This is')
      .contains('Massively');
  });

});
