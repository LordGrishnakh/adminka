import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Dashboard.scss";

import { CSSTransition } from "react-transition-group";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const Dashboard: React.FC = (props) => {
  const [inProp, setInProp] = useState(false);
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
          onMouseLeave={hideSidebarhandler}
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
          <div className="Section" onClick={() => setExpand(!expand)}>
            <span className="Circle"></span>
            {inProp && <h2>Dashboard</h2>}
          </div>
          <div className="Section" onClick={() => setExpand(!expand)}>
            <span className="Circle"></span>
            {inProp && <h2>Dashboard</h2>}
          </div>
        </nav>
      </CSSTransition>
      {/* весь верхний навбар - полоса с аватаром, никнеймом инастройками */}
      <Navbar />
      <div className="header">
        <Header />
      </div>
    </div>
  );
};

export default Dashboard;
