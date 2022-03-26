import * as React from "react";
import { NavigationItem } from "../../../context/types";

const NavItem = (props: NavigationItem) => {
  return (
    <a href="/">
      {props.icon}
      <span>{props.label}</span>
    </a>
  );
};

export default NavItem;
