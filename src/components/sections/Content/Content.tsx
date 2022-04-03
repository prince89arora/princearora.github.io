import * as React from "react";
import { useApplicationContext } from "../../../context";
import Skills from "../Skills/Skills.js";

const Content = () => {
  const { activeNavigation } = useApplicationContext();

  return (
    <>
      <Skills />
    </>
  );
};

export default Content;
