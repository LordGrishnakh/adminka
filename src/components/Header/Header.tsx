import React, { useState } from 'react'
import DropdownMenu from './HeaderComponents/DropdownMenu';
import Navbar from './HeaderComponents/Navbar';
import Navitem from './HeaderComponents/Navitem';

import { ReactComponent as CogIcon } from "./icons/cog.svg";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Navbar>

        <Navitem open={open} toggleDropdown={setOpen} icon={<CogIcon />}>
          <DropdownMenu />
        </Navitem>
      </Navbar>
    </div>
  );
}

export default Header
