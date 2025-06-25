class HomePage {
    getEmailInputBox() {
        return cy.get('[id="username"]');
    }

    getPasswordInputBox() {
        return cy.get('[id="password"]');
    }

    getLoginButton() {
        return cy.get('[id="submit-button"]');
    }

    getLoginButtonHomePage() {
        return  cy.contains('[data-testid="button-text"]', 'Sign In');
    }

    getAvatar() {
        return cy.contains('Your Account');;
    }

    getHomePageTitle() {
        return cy.title();
    }

    getTemplate() {
        return cy.contains('Your Account');
    }

    getCustomizeButton() {
        return cy.get('.product_customizebtns a');
    }

    getTemplateHeader() {
        return cy.get('.product_title');
    }

    getToggleBleedEyeOpen() {
        return cy.get('[data-icon="eye-open"]');
    }

    getToggleBleedButton() {
        return cy.get('button').contains("Toggle Bleed");
    }

    getDownloadButton() {
        return cy.get('.downloadbtn').contains("Download");
    }

    getModal() {
        return cy.get('.modal-body');

    }
    getContinueButton() {
        return cy.get('#submit-button')
    }

    login(email, password) {
        this.getLoginButtonHomePage().click();
        this.getEmailInputBox().type(email);
        this.getContinueButton().click();
        this.getPasswordInputBox().type(password);
        this.getLoginButton().click();
    }

    verifyPageTitle() {
        this.getHomePageTitle().should('contain', 'BBC');
    }

    verifyUserLoggedIn() {
        this.getAvatar().should("exist");
    }

    selectFirstTemplate() {
        this.getTemplate().first().invoke('removeAttr', 'target').click();
    }

    selectCustomizeTemplate() {
        this.getCustomizeButton().invoke('removeAttr', 'target').click();
    }

    extractHeader() {
        this.getTemplateHeader().invoke("text").then((text) => {
            const header = text.trim().toLowerCase().replace(/ /g, "-");
            cy.wrap(header).as('header');
        });
    }

    verifyProjectOpens() {
        cy.get('@header').then((header) => {
            cy.url().should('contain', `design/${header}`);
        });
    }

    editToggleBleed() {
        this.getToggleBleedEyeOpen().should("not.exist");
        this.getToggleBleedButton().click();
    }

    verifyToggleEdit() {
        this.getToggleBleedEyeOpen().should("exist");
    }

    clickDownloadButton() {
        this.getDownloadButton().click();
    }
    verifyDownloadClick() {
        this.getModal().should("exist");
    }
}

export default HomePage;
