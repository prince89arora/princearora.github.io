import * as React from "react";
import { Briefcase, Person, Tools } from "react-bootstrap-icons";

const iconSize = 20;
const items = [
  {
    label: "Skills",
    screen: "skills",
    icon: <Tools size={iconSize} />,
  },
  {
    label: "Experience",
    screen: "experience",
    icon: <Briefcase size={iconSize} />,
  },
  {
    label: "About",
    screen: "about",
    icon: <Person size={iconSize} />,
  },
];

export default {
  iconSize,
  items,
};
