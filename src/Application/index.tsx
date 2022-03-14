import * as React from "react";
import { PageLayout } from "../components/Layout";
import ApplicationContextProvider from "../context/ApplicationContextProvider";

export const Application = () => {
  return (
    <ApplicationContextProvider>
      <div className="app">
        <>
          <PageLayout />
        </>
      </div>
    </ApplicationContextProvider>
  );
};
