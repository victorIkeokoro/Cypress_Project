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

    homePageSignInButton() {
        return cy.contains('[data-testid="button-text"]', 'Sign In');
    }

    userAvatar() {
        return cy.contains('Your Account');
    }

    pageTitle() {
        return cy.title();
    }

    firstTemplate() {
        return cy.contains('Your Account').first();
    }

    customizeButton() {
        return cy.get('.product_customizebtns a');
    }

    templateHeader() {
        return cy.get('.product_title');
    }

    toggleBleedIcon() {
        return cy.get('[data-icon="eye-open"]');
    }

    toggleBleedButton() {
        return cy.contains('button', 'Toggle Bleed');
    }

    downloadButton() {
        return cy.contains('.downloadbtn', 'Download');
    }

    modalBody() {
        return cy.get('.modal-body');
    }

    // === Actions ===

    login(email, password) {
        this.homePageSignInButton().click();
        this.emailInput().type(email);
        this.continueButton().click();
        this.passwordInput().type(password);
        this.loginButton().click();
        return this; // Chainable
    }

    verifyUserLoggedIn() {
        this.userAvatar().should('exist');
    }

    verifyTitleContains(text = 'BBC') {
        this.pageTitle().should('contain', text);
    }

    openFirstTemplate() {
        this.firstTemplate().invoke('removeAttr', 'target').click();
    }

    clickCustomizeButton() {
        this.customizeButton().invoke('removeAttr', 'target').click();
    }

    extractTemplateHeader() {
        this.templateHeader().invoke('text').then((text) => {
            const header = text.trim().toLowerCase().replace(/ /g, '-');
            cy.wrap(header).as('header');
        });
    }

    verifyProjectOpened() {
        cy.get('@header').then((header) => {
            cy.url().should('contain', `design/${header}`);
        });
    }

    toggleBleedEdit() {
        this.toggleBleedIcon().should('not.exist');
        this.toggleBleedButton().click();
    }

    verifyToggleVisible() {
        this.toggleBleedIcon().should('exist');
    }

    clickDownload() {
        this.downloadButton().click();
    }

    verifyDownloadModalVisible() {
        this.modalBody().should('exist');
    }
}

export default HomePage;
