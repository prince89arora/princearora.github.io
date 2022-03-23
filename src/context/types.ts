export type PersonalInformation = {
  firstname: string;
  lastname: string;
  dob: string;
  position: string;
};
export type ContactInformation = {
  email: string;
  phone: string;
};

export type Introduction = {
  personal?: PersonalInformation;
  contact?: ContactInformation;
};

export type ApplicationContextType = {
  introduction?: Introduction;
};
