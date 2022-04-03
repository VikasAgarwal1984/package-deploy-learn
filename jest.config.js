module.exports = {
  roots: ["<rootDir>"],
  moduleDirectories: ["node_modules", "src"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "css"],
  testPathIgnorePatterns: ["<rootDir>/node_modules"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.(css|less|sass|scss)$": "jest-transform-css"
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
