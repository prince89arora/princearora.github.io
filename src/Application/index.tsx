import * as React from "react";
import "./app.scss";
import PageLayout from "../components/Layout";
import * as layoutConfig from "./layout-config.json";

export const Application = () => {
  return (
    <div className="app">
      <PageLayout />
    </div>
  );
};
