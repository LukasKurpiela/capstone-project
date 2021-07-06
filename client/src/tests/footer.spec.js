describe('Use the Footer to navigate through the application', () => {
  it('Checks for the Newspage', () => {
    cy.visit('/news');
    cy.get('.button').click();
    cy.get('[href="/portfolio"]').click();
    cy.get('h2').contains('News');
  });

  it('Switches to Portfoliopage', () => {
    cy.visit('/portfolio');
    cy.get('.button').click();
    cy.get('[href="/portfolio"]').click();
    cy.get('span').contains('Holdings');
  });
});

it('Visits the Markets Page', () => {
  cy.visit('/');
  cy.get('.button').click();
  cy.get('[href="/"]').click();
  cy.get('span').contains('Bitcoin');
});
