module.exports = {
  testEnvironment: 'node',
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)", "**/__tests__/**/*.js"],
	displayName: 'API',
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'coverage',
  verbose: true,  
	testPathIgnorePatterns: ['/node_modules/', 'ignore'],
	transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.ts$": "ts-jest"
  }
};