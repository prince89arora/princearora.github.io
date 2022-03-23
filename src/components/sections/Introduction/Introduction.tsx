import * as React from "react";
import { useApplicationContext } from "../../../context";
import Heading from "./Heading";
import Personal from "./Personal";
import ProfileImage from "./ProfileImage";

const Introduction = () => {
  const { introduction } = useApplicationContext();

  return (
    <>
      {introduction && (
        <div className="introduction">
          <ProfileImage />
          <Heading />
          {/* <Personal /> */}
          {/* <Contact /> */}
        </div>
      )}
    </>
  );
};

export default Introduction;
