const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'custom_reporters/Spec579.js',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  port: 61234,
  video:false,
  screenshotOnRunFailure: false,
});
