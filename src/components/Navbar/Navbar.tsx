import React from 'react';
import { getUserName } from '../../utilFunctions';
import { ReactComponent as SettingsIcon } from "../Header/icons/rogi_test.svg";

import "./Navbar.scss";

const Navbar: React.FC = () => {
  return (
    <div className="Navbar">
      <div className="Avatar">
        
      </div>
      <div className="Nickname">
        <h2>{getUserName()}</h2>
      </div>
      <div className="LocalSettings">
        <SettingsIcon />
      </div>
    </div>
  )
}

export default Navbar
