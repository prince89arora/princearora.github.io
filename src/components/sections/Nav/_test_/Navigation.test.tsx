import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navigation from "../Navigation";
import { ApplicationContext } from "../../../../context/ApplicationContextProvider";
import navConfig from "../../../../context/NavigationConfig";

describe("Navigation", () => {
  it("default", () => {
    render(
      <ApplicationContext.Provider
        value={{
          navigation: navConfig,
        }}
      >
        <Navigation />
      </ApplicationContext.Provider>
    );
  });
});
