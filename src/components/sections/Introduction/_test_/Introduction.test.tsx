import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Introduction from "../Introduction";
import { ApplicationContext } from "../../../../context/ApplicationContextProvider";

describe("Introduction", () => {
  it("No Context", () => {
    render(<Introduction />);
  });
  it("With Context", () => {
    render(
      <ApplicationContext.Provider
        value={{
          introduction: {
            personal: {
              firstname: "FirstName",
              lastname: "LastName",
              dob: "date of birth",
              position: "Full Stack",
            },
            contact: {
              email: "testmail@mail.com",
              phone: "1234567890",
            },
          },
        }}
      >
        <Introduction />
      </ApplicationContext.Provider>
    );
  });
});
