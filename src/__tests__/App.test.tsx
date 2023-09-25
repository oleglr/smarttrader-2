// imports
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// To Test
import App from "../App";

// Tests
describe("Renders main page correctly", () => {
  /**
   * Passes - shows title correctly
   */
  it("Should render the page correctly", () => {
    // Setup
    render(<App />);
    // Post Expectations
    expect(screen.queryByText("Vite + React")).toBeInTheDocument();
  });

  /**
   * Passes - shows the button count correctly present
   */
  it("Should show the button count set to 0", () => {
    // Setup
    render(<App />);
    // Expectations
    expect(screen.queryByText("count is 0")).toBeInTheDocument();
  });

  /**
   * Passes - clicks the button 3 times and shows the correct count
   */
  it("Should show the button count set to 3", async () => {
    // Setup
    const user = userEvent.setup();
    render(<App />);
    const button = screen.queryByText("count is 0");

    // Pre Expectations
    expect(button).toBeInTheDocument();

    // Actions
    await user.click(button as HTMLElement);
    await user.click(button as HTMLElement);
    await user.click(button as HTMLElement);

    // Post Expectations
    expect(button?.innerHTML).toBe("count is 3");
  });
});
