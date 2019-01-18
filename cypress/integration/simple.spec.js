function timer(duration) {
  return new Promise(accept => {
    setInterval(() => {
      accept();
    }, duration);
  });
}

describe('tests', function () {
  beforeEach(done => {
    timer(1000).then(() => {
      cy.visit('/').then(() => {
        done();
      });
    });
  });
  it('can click the button', () => {
    cy.visit('/');
    cy.get('button.clickme').click();  // adding {force: true} here makes this work!
    cy.get('.text').should('have.text', 'clicked!');
  });
});
