import * as React from "react";
import { Introduction, Navigation, Content } from "../sections";

const PageLayout = () => {
  return (
    <>
      <Introduction />
      <Navigation />
      <Content />
    </>
  );
};

export default PageLayout;
