// setupTests.js

// Import test utilities
import "@testing-library/jest-dom";
import "@testing-library/react/cleanup-after-each";

// Set up any necessary global configuration or mocks
jest.mock("./path/to/module", () => ({
  // Mock implementation here
}));
