# Cypress Test Automation Project

A comprehensive end-to-end testing suite built with Cypress for automated web application testing.

## 📋 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Configuration](#configuration)
- [Page Object Model](#page-object-model)
- [CI/CD Integration](#cicd-integration)
- [Contributing](#contributing)

## 🔍 Overview

This project contains automated end-to-end tests using Cypress framework. The tests are structured using the Page Object Model pattern for better maintainability and reusability.

**Base URL**: https://www.bbc.com

## 🛠 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)
- **Git** (for version control)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd Cypress_project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify Cypress installation**
   ```bash
   npx cypress verify
   ```

## 📁 Project Structure

```
Cypress_project/
├── cypress/
│   ├── e2e/
│   │   └── 1-getting-started/
│   │       ├── pageObjects/
│   │       │   └── HomePage.js          # Page Object for Home Page
│   │       └── tests/
│   │           └── test.cy.js           # Main test file
│   ├── fixtures/                        # Test data files
│   └── support/                         # Support files and commands
├── .github/
│   └── workflows/
│       └── cypress.yml                  # GitHub Actions workflow
├── cypress.config.js                    # Cypress configuration
├── package.json                         # Project dependencies
└── README.md                           # This file
```

## 🚀 Running Tests

### Interactive Mode (Cypress Test Runner)
```bash
npx cypress open
```

### Headless Mode (Command Line)
```bash
# Run all tests
npx cypress run

# Run specific test file
npx cypress run --spec "cypress/e2e/1-getting-started/tests/test.cy.js"

# Run tests in specific browser
npx cypress run --browser chrome
npx cypress run --browser firefox
npx cypress run --browser edge
```

### Available NPM Scripts
```bash
# Add these to your package.json scripts section
npm run cy:open          # Open Cypress Test Runner
npm run cy:run           # Run tests headlessly
npm run cy:run:chrome    # Run tests in Chrome
npm run cy:run:firefox   # Run tests in Firefox
```

## ⚙️ Configuration

The project configuration is managed in `cypress.config.js`:

- **Base URL**: https://www.bbc.com
- **Fail on Status Code**: Disabled for flexibility
- **Test Files**: Located in `cypress/e2e/` directory

## 🏗 Page Object Model

This project uses the Page Object Model (POM) design pattern:

- **Page Objects**: Located in `cypress/e2e/1-getting-started/pageObjects/`
- **Benefits**: 
  - Improved test maintenance
  - Code reusability
  - Better organization
  - Reduced code duplication

Example usage:
```javascript
import HomePage from "../pageObjects/HomePage";

const homePage = new HomePage();
homePage.visit();
homePage.performAction();
```

## 🔄 CI/CD Integration

### GitHub Actions

This project includes a GitHub Actions workflow that:

- Runs on every push and pull request
- Tests on multiple Node.js versions (16.x, 18.x, 20.x)
- Supports multiple browsers (Chrome, Firefox, Edge)
- Uploads test artifacts and videos
- Provides detailed test reports

The workflow file is located at `.github/workflows/cypress.yml`

### Workflow Features:
- ✅ Automated test execution
- ✅ Multi-browser testing
- ✅ Artifact preservation
- ✅ Parallel test execution
- ✅ Test result reporting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines:
- Follow the Page Object Model pattern
- Write descriptive test names
- Add appropriate assertions
- Keep tests independent and atomic
- Use meaningful variable names

## 📊 Test Reports

Test results and artifacts are automatically generated:
- **Screenshots**: Captured on test failures
- **Videos**: Recorded for all test runs
- **Reports**: Available in GitHub Actions artifacts

## 🐛 Troubleshooting

### Common Issues:

1. **Cypress binary not found**
   ```bash
   npx cypress install
   ```

2. **Permission issues on macOS/Linux**
   ```bash
   sudo npx cypress install
   ```

3. **Network connectivity issues**
   - Check your internet connection
   - Verify the base URL is accessible
   - Check firewall settings

## 📝 License

This project is licensed under the ISC License.

## 📞 Support

For questions or support, please:
- Open an issue in the repository
- Check the [Cypress documentation](https://docs.cypress.io/)
- Review existing issues and discussions
