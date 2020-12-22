import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Dashboard.scss";

import { CSSTransition } from "react-transition-group";
import Header from "../Header/Header";

const Dashboard: React.FC = (props) => {
  const [inProp, setInProp] = useState(false);
  const [open, setOpen] = useState(false);
  const [expand, setExpand] = useState(false);

  console.log(expand);

  const expandSidebarhandler = () => {
    setInProp(true);
    setExpand(true);
  };
  const hideSidebarhandler = () => {
    setInProp(false);
    setExpand(false);
  };

  return (
    <div>
      <CSSTransition in={inProp} timeout={200} classNames="my-node">
        <nav
          className="Container"
          onMouseEnter={expandSidebarhandler}
          onMouseLeave={!open ? hideSidebarhandler : () => {}}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div className="LogoContainer">
            <img src="images/reactAdminkaLogoWhite.png" alt="Logo" />
          </div>
          <div className="Section" onClick={() => setExpand(!expand)}>
            <span className="Circle"></span>
            {inProp && <h2>Dashboard</h2>}
          </div>
          <CSSTransition in={expand} timeout={200} classNames="second-step">
            <ul className="DashboardSection">
              <li>
                <NavLink to="/analytics" activeClassName="active">
                  Analytics
                </NavLink>
              </li>
              <li>
                <NavLink to="/visits" activeClassName="active">
                  Visits
                </NavLink>
              </li>
              <li>
                <NavLink to="/widgets" activeClassName="active">
                  Widgets
                </NavLink>
              </li>
            </ul>
          </CSSTransition>
        </nav>
      </CSSTransition>
      <div className="header">
        <Header />
      </div>
    </div>
  );
};

export default Dashboard;
