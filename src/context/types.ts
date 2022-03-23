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

export type ApplicationContextType = {
  introduction?: Introduction;
};
