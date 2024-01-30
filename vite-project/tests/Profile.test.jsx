import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Profile from "../src/Profile"

test ("renders with the correct name", () => {
  render(<Profile name="Sarah"/>);

  expect(screen.getByRole("heading")).toHaveTextContent("Sarah");
})