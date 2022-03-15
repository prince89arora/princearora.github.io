import * as React from "react";
import { useApplicationContext } from "../../../context";
import { PersonalInformation } from "../../../context/types";

const Html = ({ firstname, lastname }: PersonalInformation) => (
  <div className="introduction__personal">
    <h3>
      {firstname} {lastname}
    </h3>
  </div>
);

const Personal = () => {
  const { introduction } = useApplicationContext();

  return <>{introduction?.personal && <Html {...introduction.personal} />}</>;
};

export default Personal;
