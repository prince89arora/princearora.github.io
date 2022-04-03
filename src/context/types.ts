import * as React from "react";

export type PersonalInformation = {
  firstname: string;
  lastname: string;
  dob: string;
  position: string;
  address?: string;
};
export type ContactInformation = {
  email: string;
  phone: string;
};

export type Introduction = {
  summary?: string;
  personal?: PersonalInformation;
  contact?: ContactInformation;
};

export type NavigationItem = {
  label: string;
  screen?: string;
  icon?: React.ReactElement;
};

export type NavigationConfig = {
  iconSize: number;
  items: Array<NavigationItem>;
};

export type ApplicationContextType = {
  introduction?: Introduction;
  navigation?: NavigationConfig;
  activeNavigation?: string;
  changeNav?: (navid: string) => void;
};
