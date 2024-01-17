const post = {
  date: 'March 29, 2022',
  slug: 'lorem-ipsum',
  title: 'Lorem Ipsum',
}

describe('Post', () => {
  before(() => {
    cy.visit(`https://casablanquita-2859c.web.app/post/${post.slug}`);
  });

  it('displays date', () => {
    cy.get('.date').contains(post.date);
  })

  it('displays title', () => {
    cy.get('h1')
      .contains(post.title);
  });
});
