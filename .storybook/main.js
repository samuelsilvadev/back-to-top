const path = require("path");

module.exports = {
  stories: [path.join(__dirname, "../src/**/*.stories.js")],
  addons: ["@storybook/addon-knobs"],
};
