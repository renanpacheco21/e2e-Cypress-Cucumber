# Cypress + Cucumber Project

This project demonstrates end-to-end testing with **Cypress** and **Cucumber** for the [ParaBank Application](https://parabank.parasoft.com/parabank/index.htm). The tests ensure the reliability and quality of the application's functionalities.

---

## 🚀 Features

- End-to-end testing with **Cypress**.
- Behavior-driven development (BDD) using **Cucumber**.
- Tests written in **Gherkin** syntax.
- Modular and reusable step definitions.

---

## 🛠️ Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-link>
   cd <repository-folder>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Open Cypress**:
   ```bash
   npx cypress open
   ```

---

## 📁 Project Structure

```
project-root
│
├── cypress
│   ├── e2e
│   │   ├── features
│   │   │   ├── login.feature
│   │   │   ├── account.feature
│   │   │   └── ...
│   │   ├── step_definitions
│   │   │   ├── login.js
│   │   │   ├── account.js
│   │   │   └── ...
│   └── support
│       └── e2e.js
├── node_modules
├── cypress.config.js
└── package.json
```

### Key Folders:
- **`cypress/e2e/features`**: Contains Gherkin `.feature` files.
- **`cypress/e2e/step_definitions`**: Step definitions corresponding to feature files.
- **`cypress/support`**: Custom commands and configuration.

---

## ✅ Running Tests

1. **Run tests in the Cypress GUI**:
   ```bash
   npx cypress open
   ```
   Select a `.feature` file to execute the tests.

2. **Run tests in the terminal**:
   ```bash
   npx cypress run
   ```

---


## 🔗 Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [Cucumber Documentation](https://cucumber.io/docs/)
- [ParaBank Application](https://parabank.parasoft.com/parabank/index.htm)

---

## 📌 Notes

- This project uses **Cypress** for testing and **Cucumber** for BDD to ensure tests are readable and maintainable.
- Customize the test scenarios to include additional ParaBank features as needed.

---

## 🧑‍💻 Author
Feel free to connect and share your thoughts! 

Renan Pacheco
