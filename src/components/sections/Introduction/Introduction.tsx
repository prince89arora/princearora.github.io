import * as React from "react";
import { useApplicationContext } from "../../../context";
import { Card } from "../../partials";
import Contact from "./Contact";
import Personal from "./Personal";
import ProfileImage from "./ProfileImage";

const Introduction = () => {
  const { introduction } = useApplicationContext();

  return (
    <>
      {introduction && (
        <Card>
          <div className="introduction">
            <ProfileImage />
            <Personal />
            <Contact />
          </div>
        </Card>
      )}
    </>
  );
};

export default Introduction;
