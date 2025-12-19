const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
   reporterOptions: {
          reportDir: 'cypress/reports/mochawesome',
          overwrite: false,
          html: true,
          json: true,
          charts: true,
          reportPageTitle: 'Cypress Automation Report',
          embeddedScreenshots: true,
          inlineAssets: true
        },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    supportFile: 'cypress/support/e2e.js', // que exista
  },
});
