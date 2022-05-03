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
          <div className="introduction_container">
            <div className="row">
              <div className="col-2">
                <ProfileImage />
              </div>
              <div className="col-6">
                <Heading />
              </div>
              <div className="col-4">
                <p>Contact information here..</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Introduction;
