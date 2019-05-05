module.exports = {
  setupFiles: [
    '<rootDir>/test/setupTests.js',
  ],
  snapshotSerializers: [
    "enzyme-to-json/serializer"
  ],
  transformIgnorePatterns: [
    "/node_modules/(?!@babel).+\\.js$"
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': "identity-obj-proxy"
  },
  transform: {
    "^.+\\.jsx$": "babel-jest",
    "^.+\\.js$": "babel-jest"
  },
  moduleFileExtensions: [
    "js",
    "jsx"
  ],
  moduleDirectories: [
    "node_modules"
  ],
  testRegex: ".*.test.js$",
  collectCoverage: true,
  coverageThreshold: {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": -10
    },
    "./src/js/components/": {
      "branches": 80,
      "statements": 80
    }
  }
};
