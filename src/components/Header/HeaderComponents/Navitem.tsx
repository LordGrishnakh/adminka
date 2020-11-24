import React from "react";
import "./HeaderComponents.scss"

const Navitem: React.FC<{
  open: boolean;
  icon: React.ReactElement;
  toggleDropdown: (open: boolean) => void;
}> = (props) => {
  return (
    <li className="nav-item">
      <a
        href="#$"
        className="icon-button"
        onClick={() => props.toggleDropdown(!props.open)}
      >
        {props.icon}
      </a>

      {props.open && props.children}
    </li>
  );
};

export default Navitem;
