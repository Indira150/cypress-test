const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

async function setupNodeEvents(on, config) {
    await preprocessor.addCucumberPreprocessorPlugin(on, config);

    on(
        "file:preprocessor"
    );

    return config;
}

module.exports = defineConfig({
    e2e: {
        setupNodeEvents,
        specPattern: "cypress/e2e/features/*.feature",
        baseUrl: "https://www.automationexercise.com/",
        chromeWebSecurity: false,
    },
});