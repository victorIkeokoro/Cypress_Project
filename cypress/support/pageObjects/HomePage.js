class HomePage {
    // === Locators ===
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
// === Search Locators ===
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

// === Search Actions ===
clearPopups() {
    cy.reload(); // reload to clear modals/popups
}

searchFor(term) {
    this.searchMenuButton().click({ force: true });
    this.searchInputField().type(term);
    this.searchButton().click({ force: true });
}

verifySearchResultVisible() {
    this.searchResults().eq(0).should('be.visible');
}

getSearchResults() {
    return this.searchResults();
}
}

export default HomePage;
