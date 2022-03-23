import * as React from "react";
import { useApplicationContext } from "../../../context";
import { PersonalInformation } from "../../../context/types";

const Html = ({ firstname, lastname, position }: PersonalInformation) => (
  <div className="introduction__personal">
    <div className="introduction__personal__title">
      <h1>
        {firstname} {lastname}
      </h1>
      <h3>{position}</h3>
    </div>
  </div>
);

const Personal = () => {
  const { introduction } = useApplicationContext();

  return <>{introduction?.personal && <Html {...introduction.personal} />}</>;
};

export default Personal;
