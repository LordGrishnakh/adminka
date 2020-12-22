import React, { useState } from 'react'
import DropdownMenu from './HeaderComponents/DropdownMenu';
import Navbar from './HeaderComponents/Navbar';
import Navitem from './HeaderComponents/Navitem';

import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";


import { ReactComponent as MessangerIcon } from "./icons/messenger.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";

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
