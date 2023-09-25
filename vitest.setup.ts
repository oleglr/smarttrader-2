import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

/**
 * Resets all renders after each test (e.g. clearing jsdom)
 */
afterEach(() => {
  cleanup();
});
