import * as React from "react";
import { Download } from "react-bootstrap-icons";
import { useApplicationContext } from "../../../context";
import NavItem from "./NavItem";

const Navigation = () => {
  const { navigation } = useApplicationContext();
  return (
    <div className="navigation">
      <nav>
        <ul className="navigation__list">
          {navigation.items.map((item) => (
            <li className="navigation__list__item" key={item.label}>
              <NavItem {...item} />
            </li>
          ))}

          <li className="navigation__list__item">
            <NavItem
              icon={<Download size={navigation.iconSize} />}
              label={"Download"}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
