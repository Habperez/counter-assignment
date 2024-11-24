// Import necessary react testing library helpers
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // For extended matchers
import Counter from "../components/Counter"; // Adjust the path based on your file structure

beforeEach(() => {
  // Render the Counter component before each test
  render(<Counter />);
});

test("renders counter message", () => {
  // Check if "Counter" text is on the screen
  expect(screen.getByText(/Counter/i)).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  // Make sure the initial count starts at 0
  const countElement = screen.getByTestId("count");
  expect(countElement.textContent).toBe("0");
});

test("clicking + increments the count", () => {
  // Simulate a click on the + button
  const incrementButton = screen.getByText("+");
  fireEvent.click(incrementButton);

  // Check if the count increased
  const countElement = screen.getByTestId("count");
  expect(countElement.textContent).toBe("1");
});

test("clicking - decrements the count", () => {
  // Simulate a click on the - button
  const decrementButton = screen.getByText("-");
  fireEvent.click(decrementButton);

  // Check if the count decreased
  const countElement = screen.getByTestId("count");
  expect(countElement.textContent).toBe("-1");
});
