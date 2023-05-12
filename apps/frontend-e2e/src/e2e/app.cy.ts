import { getTitle } from '../support/app.po';

describe('frontend', () => {
  beforeEach(() => cy.visit('/'));

  it('Homepage display "Patientor" as the title', () => {
    getTitle().contains('Patientor');
  });

  // it should open modal on click of add patient button
  it('should open modal on click of add patient button', () => {
    cy.get('button').contains('Add New Patient').click();
    cy.get('h2').contains('Add a new patient');
  });
});
