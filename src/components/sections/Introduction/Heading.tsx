import * as React from "react";
import { useApplicationContext } from "../../../context";

const Heading = () => {
  const { introduction } = useApplicationContext();

  return (
    <>
      {introduction && introduction.personal && (
        <div className="introduction__heading">
          <h1 className="introduction__heading__name">
            {introduction.personal?.firstname} {introduction.personal?.lastname}
          </h1>
          <h2 className="introduction__heading__position">
            {introduction.personal?.position}
          </h2>
        </div>
      )}
    </>
  );
};

export default Heading;
