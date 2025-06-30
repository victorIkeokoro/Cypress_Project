import HomePage from '../pageObjects/HomePage';

describe('BBC App', () => {
  const homePage = new HomePage();

  beforeEach(() => {
    cy.visit('/');
  });

  it('Return number of matches on the first page', () => {
    homePage.clearPopups();
    homePage.searchFor('sports');
    homePage.verifySearchResultVisible();

    homePage.getSearchResults().then((ele) => {
      const total = ele.length;
      cy.log('Total headlines:', total);
    });

    cy.nameOfCommand();




  });
});

