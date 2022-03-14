export type PersonalInformation = {
  firstname: string;
  lastname: string;
  dob: string;
};

export type Introduction = {
  personal?: PersonalInformation;
};

export type ApplicationContextType = {
  introduction?: Introduction;
};
