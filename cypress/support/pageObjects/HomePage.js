class HomePage {
  // ========================================
  // AUTHENTICATION LOCATORS
  // ========================================

  emailInput() {
    return cy.get('#username');
  }

  passwordInput() {
    return cy.get('#password');
  }

  continueButton() {
    return cy.get('#submit-button');
  }

  loginButton() {
    return cy.get('#submit-button');
  }

  // ========================================
  // SEARCH LOCATORS
  // ========================================

  searchMenuButton() {
    return cy.get('[aria-label="Open menu"]');
  }

  searchInputField() {
    return cy.get('[data-testid="search-input-field"]');
  }

  searchButton() {
    return cy.get('[data-testid="search-input-search-button"]');
  }

  searchResults() {
    return cy.get('[data-testid="card-headline"]');
  }

  // ========================================
  // UTILITY ACTIONS
  // ========================================

  clearPopups() {
    cy.reload(); // Reload to clear modals/popups
    return this;
  }

  // ========================================
  // SEARCH ACTIONS
  // ========================================

  searchFor(term) {
    this.searchMenuButton().click({ force: true });
    this.searchInputField().type(term);
    this.searchButton().click({ force: true });
    return this;
  }

  // ========================================
  // VALIDATION METHODS
  // ========================================

  verifySearchResultVisible() {
    this.searchResults().eq(0).should('be.visible');
    return this;
  }

  getSearchResults() {
    return this.searchResults();
  }
}

export default HomePage;
