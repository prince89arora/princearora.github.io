import * as React from "react";
import { ApplicationContextType } from "./types";
import * as introData from "../../data/introduction.json";
import navConfig from "./NavigationConfig";

export const ApplicationContext = React.createContext<ApplicationContextType>(
  {}
);

export type Props = {
  children: React.ReactNode;
};

const ApplicationContextProvider = ({ children }: Props) => {
  const [activeNavigation, setActiveNavigation] = React.useState("");

  const changeNav = (navId: string) => {
    console.log(navId);

    setActiveNavigation(() => navId);
  };

  return (
    <ApplicationContext.Provider
      value={{
        introduction: introData,
        navigation: navConfig,
        activeNavigation,
        changeNav,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
