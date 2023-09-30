const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      config.specPattern = [
        "cypress/e2e/adminLogin/adminLogin.cy.js",
        //   'cypress/e2e/userLogin/userLogin.cy.js',
        //    'cypress/e2e/tenant/tenant.cy.js',
        //    'cypress/e2e/applicantService/applicantCreate.cy.js',
        "cypress/e2e/applicantService/applicantList.cy.js",
        "cypress/e2e/applicantService/viewApplication.cy.js",
        "cypress/e2e/applicantService/adminDashboard.cy.js",
        "cypress/e2e/applicantService/jobView.cy.js",
        "cypress/e2e/phoneInterview/healthCheck.cy.js",
        "cypress/e2e/phoneInterview/questionList.cy.js",
        //   'cypress/e2e/phoneInterview/createAnswer.cy.js',
        "cypress/e2e/mcqService/healthCheck.cy.js",
        "cypress/e2e/mcqService/fetchAllQuestion.cy.js",
        //   'cypress/e2e/mcqService/createMcq.cy.js',
        //   'cypress/e2e/mcqService/updateMcq.cy.js',
        //   'cypress/e2e/mcqService/deleteMcq.cy.js',
        "cypress/e2e/mcqService/mcqCategoryList.cy.js",
        //   'cypress/e2e/mcqService/mcqCategorisedQuestion.cy.js',
        //   'cypress/e2e/tenant/userCreate.cy.js',
        //   'cypress/e2e/rejected/rejected_initial.cy.js',
        //   'cypress/e2e/rejected/rejected_phoneInterview.cy.js',
        //   'cypress/e2e/rejected/rejected_mcq.cy.js',
        //   'cypress/e2e/rejected/selected_Interview.cy.js',
        //   'cypress/e2e/rejected/force.cy.js',
        "cypress/e2e/rejected/dashboardList.cy.js",
      ];
      return config;
    },
  },
});
