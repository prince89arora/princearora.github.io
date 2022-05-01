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
          <div className="row">
            <div className="col-4">
              <ProfileImage />
            </div>
            <div className="col-8">
            <div className="introduction__moreinfo">
              <Heading />
              <Personal />
            </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Introduction;
