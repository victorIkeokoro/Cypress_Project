// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('logSearchHeadlines', () => {
    cy.get('[data-testid="card-headline"]').each(($el, index) => {
      cy.wrap($el)
        .invoke('text')
        .then((text) => {
          cy.log(`Headline ${index + 1}: ${text.trim()}`);
        });
    });
  });
Cypress.Commands.add("nameOfCommand", () => {
    cy.get('[data-testid="card-headline"]').each((ele,index) => {
        cy.wrap(ele).invoke("text").then((text) => {
            cy.log( `The Header for the ${index} article is ${text.trim()} `)
        })
    })



  })