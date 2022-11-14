const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  collectCoverage: true 
};

module.exports = createJestConfig(customJestConfig);    