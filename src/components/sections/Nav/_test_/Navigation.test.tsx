import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navigation from "../Navigation";

describe("Navigation", () => {
  it("default", () => {
    render(<Navigation />);
  });
});
