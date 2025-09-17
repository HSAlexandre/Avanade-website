# Avanade Website Login Page — Cypress E2E Tests

This repo contains end‑to‑end (E2E) tests built with [Cypress](https://www.cypress.io/) for the Avanade careers login page. It demonstrates practices like environment variables, custom commands, negative & positive login scenarios, and automated reporting.

---

## 📁 Project Structure

```
/
├── cypress/
│   ├── e2e/              # E2E test scripts
│   ├── fixtures/         # Data for negative cases, invalid users, etc.
│   └── support/
│       ├── commands.js   # Custom commands (e.g. login) for a better readability and maintainability through code refactoring.
│       └── other support files
├── .gitignore
├── cypress.config.js     # Cypress config including env variables
├── package.json
└── README.md
```

---

## ⚙️ Setup & Requirements

1. Clone this repo:

   ```bash
   git clone https://github.com/HSAlexandre/Avanade-website.git
   cd Avanade-website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the **project root** (same level as `cypress.config.js`) with:

   ```
   email=your_email@example.com
   pass=your_password
   ```

   > ⚠️ Do *not* commit `.env`. It should be in `.gitignore`.

---

## ▶️ Running the Tests

- To open Cypress in interactive mode:

  ```bash
  npx cypress open
  ```

- To run the tests headlessly (for generating reports):

  ```bash
  npx cypress run --reporter mochawesome
  ```

---

## 🔍 Test Scenarios Included

- **Happy path**: Login with valid credentials  
- **Negative tests**: Wrong email, wrong password, empty fields validations  
- Custom command `cy.login(email, password)` for reuse of login step

---

## 📊 Reports (Mochawesome)

- After running the tests with `npx cypress run --reporter mochawesome`, a Mochawesome report is generated in `cypress/reports/`  
- For a demo report, I've added a report in docs/ folder containing the test result. (It contains a failure in happy path due to account restriction)

---

## 🔐 Environment Variables

- Credentials are not hardcoded in tests  
- They are loaded via `.env` and mapped in `cypress.config.js`  
- In tests, use:

  ```js
  cy.login(Cypress.env("username"), Cypress.env("password"))
  ```

---

## 🧰 Custom Commands

- Defined in `cypress/support/commands.js`  

---

## 📝 Notes

 Feel free to contribute :)

- Test coverage can go beyond only login (e.g., logout, password reset, UI validation).
- Tests can be integrated with GitHub Actions so tests + reports run automatically on push/PR.

---
