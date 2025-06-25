import HomePage from "../pageObjects/HomePage";


describe('BBC app', () => {

  const homePage = new HomePage();

  it('Test login functionality', () => {
    cy.visit("/");
   
    cy.fixture('user').then((user) => {
      homePage.login(user.email, user.password);
    })
    homePage.verifyUserLoggedIn();
  });

 
});