import React from "react";
import "./HeaderComponents.scss"

interface DropdownProps {
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  goToMenu?: menu;
  setActiveMenu?: (goToMenu: menu) => void;
}
type menu = "main" | "settings" | "animals"

const DropdownItem: React.FC<DropdownProps> = (props) => {
  const changeActiveMenu = (menu: menu) => {
    if (props.goToMenu && props.setActiveMenu) {
      props.setActiveMenu(menu)
    }
  }
  return (
    <div className="menu-item" onClick={()=>changeActiveMenu(props.goToMenu as menu)}>
      <span className="icon-button icon-left">{props.leftIcon}</span>
      {props.children}
      <span className="icon-button icon-right">{props.rightIcon}</span>
    </div>
  );
};

export default DropdownItem;
