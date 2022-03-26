import * as React from "react";

const Navigation = () => {
  return (
    <div className="navigation">
      <nav>
        <ul className="navigation__list">
          <li className="navigation__list__item">
            <a href="/">
              <span>Skills</span>
            </a>
          </li>
          <li className="navigation__list__item">
            <a href="/">
              <span>Experience</span>
            </a>
          </li>
          <li className="navigation__list__item">
            <a href="/">
              <span>About</span>
            </a>
          </li>
          <li className="navigation__list__item">
            <a href="/">
              <span>Download</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
