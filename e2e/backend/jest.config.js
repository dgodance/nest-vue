module.exports = {
	displayName: "backend-e2e",
	testMatch: ["<rootDir>/**/*.e2e.[jt]s?(x)"],
	preset: "../../jest.preset.js",
	globals: {
		"ts-jest": {
			tsconfig: "<rootDir>/tsconfig.test.json"
		}
	},
	transform: {
		"^.+\\.[tj]s$": "ts-jest"
	},
	moduleFileExtensions: ["ts", "js", "html", "json"],
	coverageDirectory: "../../dist/tests/coverage/backend",
	reporters: [
		"default",
		[
			"jest-junit",
			{
				suiteName: "Backend E2E Tests",
				outputDirectory: "./dist/tests",
				outputName: "junit-backend-e2e.xml"
			}
		]
	]
};
