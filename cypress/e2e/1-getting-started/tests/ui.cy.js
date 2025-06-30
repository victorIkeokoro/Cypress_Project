import HomePage from '../../../support/pageObjects/HomePage';

describe('BBC App', () => {
  const homePage = new HomePage();

  beforeEach(() => {
    cy.visit('/');
  });

  it('should return number of matches on the first page', () => {
    homePage.clearPopups();
    homePage.searchFor('sports');
    homePage.verifySearchResultVisible();

    homePage.getSearchResults().then((elements) => {
      const total = elements.length;
      cy.log('Total headlines:', total);
    });

    cy.nameOfCommand();
  });
});