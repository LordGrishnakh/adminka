import React, { useState } from "react";
import "./HeaderComponents.scss"

import DropdownItem from "./DropdownItem";
import { ReactComponent as ChevronIcon } from "../icons/chevron.svg";
import { ReactComponent as CogIcon } from "../icons/cog.svg";
import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";
import { ReactComponent as BoltIcon } from "../icons/bolt.svg";



import { CSSTransition } from "react-transition-group";

const DropdownMenu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<"main" | "settings" | "animals">("main");
  const [menuHeight, setMenuHeight] = useState<number | null>(null);

  const calcHeight = (el: HTMLElement) => {
    const height = el.offsetHeight + 25;
    setMenuHeight(height)
  }

  return (
    <div className="dropdown" style={{ height: menuHeight as number }}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<BoltIcon />}>{"{My Profile}"}</DropdownItem>
          <DropdownItem goToMenu="settings" setActiveMenu={setActiveMenu} leftIcon={<CogIcon />} rightIcon={<ChevronIcon />}>
            Settings
          </DropdownItem>
          <DropdownItem goToMenu="main" setActiveMenu={setActiveMenu} >
            Logout
            {/* <Redirect to="/" /> */}
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" setActiveMenu={setActiveMenu} leftIcon={<ArrowIcon />}></DropdownItem>
          <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />}>
            Settings
          </DropdownItem>
          <DropdownItem />
          <DropdownItem />
          <DropdownItem />
          <DropdownItem />
          <DropdownItem />
          <DropdownItem />
          <DropdownItem />
          <DropdownItem />
          <DropdownItem />
          <DropdownItem />
          <DropdownItem />
          <DropdownItem />
          <DropdownItem />
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
