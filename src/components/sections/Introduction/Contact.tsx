import * as React from "react";
import { useApplicationContext } from "../../../context";
import { ContactInformation } from "../../../context/types";

/**
 *
 */
const Html = ({ email, phone }: ContactInformation) => (
  <div className="introduction__contact">
    <ul>
      <li>Email: {email}</li>
      <li>Phone: {phone}</li>
    </ul>
  </div>
);

/**
 *
 */
const Contact = () => {
  const { introduction } = useApplicationContext();
  return <>{introduction?.contact && <Html {...introduction.contact} />}</>;
};

export default Contact;
