describe('Exchange Rate API Tests', () => {
  const url = 'https://v6.exchangerate-api.com/v6/1fc80820c72b0163bc9c7536/latest/USD';

  it('should verify the HTTP status is 200', () => {
    cy.request(url).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('should count the total number of currencies returned', () => {
    cy.request(url).then((response) => {
      expect(response.status).to.eq(200);
      const currencyCount = Object.keys(response.body.conversion_rates).length;
      cy.log(`Total number of currencies: ${currencyCount}`);
    });
  });

  it('should verify the currency GBP is shown within the response', () => {
    cy.request(url).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.conversion_rates).to.have.property('GBP');
    });
  });
});
  