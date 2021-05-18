module.exports = {
  testEnvironment: "jsDom",
  moduleNameMapper: {
    "\\.module\\.css": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
