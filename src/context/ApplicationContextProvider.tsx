import * as React from "react";
import { ApplicationContextType } from "./types";
import * as introData from "../../data/introduction.json";
import navConfig from "./NavigationConfig";

export const ApplicationContext =
  React.createContext<ApplicationContextType>(null);

export type Props = {
  children: React.ReactNode;
};

const ApplicationContextProvider = ({ children }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [introduction, setIntroduction] = React.useState(introData || {});

  return (
    <ApplicationContext.Provider
      value={{
        introduction: introduction,
        navigation: navConfig,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
