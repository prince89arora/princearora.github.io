import * as React from "react";
import { Briefcase, Person, Tools } from "react-bootstrap-icons";

const iconSize = 20;
const items = [
  {
    label: "Skills",
    screen: "",
    icon: <Tools size={iconSize} />,
  },
  {
    label: "Experience",
    screen: "",
    icon: <Briefcase size={iconSize} />,
  },
  {
    label: "About",
    screen: "",
    icon: <Person size={iconSize} />,
  },
];

export default {
  iconSize,
  items,
};
