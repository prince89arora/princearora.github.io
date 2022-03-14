import * as React from "react";
import { ApplicationContext } from "../../../context/ApplicationContextProvider";
import { Card } from "../../partials";

const Introduction = () => {
  const { introduction } = React.useContext(ApplicationContext);

  return (
    <>
      {introduction && (
        <Card>
          <p>
            {introduction.personal.firstname} {introduction.personal.lastname}
          </p>
        </Card>
      )}
    </>
  );
};

export default Introduction;
