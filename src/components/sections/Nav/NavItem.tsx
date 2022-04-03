import * as React from "react";
import { useApplicationContext } from "../../../context";
import { NavigationItem } from "../../../context/types";

const NavItem = (props: NavigationItem) => {
  const { changeNav } = useApplicationContext();
  return (
    <a
      href="/"
      onClick={(e) => {
        e.preventDefault();
        changeNav(props.screen);
      }}
    >
      {props.icon}
      <span>{props.label}</span>
    </a>
  );
};

export default NavItem;
