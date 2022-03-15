import { useContext } from "react";
import { ApplicationContext } from "./ApplicationContextProvider";

const useApplicationContext = () => {
  const context = useContext(ApplicationContext);
  if (!context) {
    console.error("Application context not found!");
    return {};
  }
  return { ...context };
};

export default useApplicationContext;
