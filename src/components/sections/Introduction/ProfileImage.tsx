import * as React from "react";
import { useApplicationContext } from "../../../context";

const ProfileImage = () => {
  const { introduction } = useApplicationContext();
  return (
    <div className="introduction__image">
      <img
        src="https://via.placeholder.com/700"
        alt={
          introduction
            ? `${introduction.personal.firstname} ${introduction.personal.lastname}`
            : ""
        }
      />
    </div>
  );
};

export default ProfileImage;
