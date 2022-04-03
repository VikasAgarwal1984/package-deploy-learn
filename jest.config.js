module.exports = {
  roots: ["./src"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "css"],
  testPathIgnorePatterns: ["node_modules"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.css$": "jest-transform-scss"
  },
  testMatch: ["**/*.test.(ts|tsx)"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
    "identity-obj-proxy",
  },
  coverageReporters: ["html", ["text", {skipFull: true}]],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      line: 80,
      statements: 80
    }
  }
};
