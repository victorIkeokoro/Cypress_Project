import HomePage from "../pageObjects/HomePage";

describe('BBC App', () => {
  const homePage = new HomePage();

  beforeEach(() => {
    cy.visit('/');
  });

  it('should log in successfully', () => {
    cy.fixture('user').then(({ email, password }) => {
      homePage.login(email, password);
     
    });
  });
});
