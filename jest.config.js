const config = {
  //   moduleNameMapper: {
  //     "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  //   },
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.tsx", "src/**/*.ts"],
  coveragePathIgnorePatterns: ["node_modules", "test-config", "data/*.json"],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
};

// eslint-disable-next-line no-undef
module.exports = config;
