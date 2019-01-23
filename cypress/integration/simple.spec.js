/// <reference types="Cypress" />

describe('tests', function () {
  beforeEach(() => {
    cy.visit('/');
  });
  it.only('can click the button', () => {
    cy.visit('/');
    cy.get('button.clickme').click();
    cy.get('.text').should('have.text', 'clicked!');
    cy.get('button').then($el => {
      expect($el).to.have.class('clickme');
    });
  });
});
