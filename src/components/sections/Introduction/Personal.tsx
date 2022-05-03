import * as React from "react";
import { useApplicationContext } from "../../../context";

// eslint-disable-next-line react/prop-types
const DataRow = ({ label, information }) => {
  return (
    <div className="data-row">
      <span className="label">{label}</span> <span>{information}</span>
    </div>
  );
};

const Contact = () => {
  const { introduction } = useApplicationContext();
  return (
    <div className="introduction__moreinfo__personal__contact">
      <h2>Personal Information</h2>
      <DataRow
        label={"Name:"}
        information={`${introduction.personal.firstname} ${introduction.personal.lastname}`}
      />
      <DataRow label={"DOB:"} information={introduction.personal.dob} />
      <DataRow label={"Address:"} information={introduction.personal.address} />
      <DataRow label={"Email:"} information={introduction.contact?.email} />
      <DataRow label={"Phone:"} information={introduction.contact?.phone} />
    </div>
  );
};

const Summary = () => {
  const { introduction } = useApplicationContext();
  return (
    <div className="introduction__moreinfo__personal__summary">
      <p>{introduction?.summary}</p>
    </div>
  );
};

const Personal = () => {
  return (
    <div className="introduction__moreinfo__personal">
      <Contact />
    </div>
  );
};

export default Personal;
