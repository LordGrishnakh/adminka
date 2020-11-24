import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dashboard.module.scss";

import { CSSTransition } from "react-transition-group";
import Header from "../Header/Header";

const Dashboard: React.FC = (props) => {
  const [inProp, setInProp] = useState(false);
  return (
    <div>
      <nav
        className={styles.Container}
        onClick={() => {
          setInProp(!inProp);
          console.log(inProp);
        }}
      >
        <div className={styles.LogoContainer}>
          <img src="images/reactAdminkaLogoWhite.png" alt="Logo" />
        </div>
        <div>
          <div className={styles.circle}></div>
          <h2>Dashboard</h2>
        </div>
        <CSSTransition in={inProp} timeout={1000} classNames="my-node">
          <ul className={styles.DashboardSection}>
            <li>
              <NavLink to="/analytics" activeClassName={styles.active}>
                Analytics
              </NavLink>
            </li>
            <li>
              <NavLink to="/visits" activeClassName={styles.active}>
                Visits
              </NavLink>
            </li>
            <li>
              <NavLink to="/widgets" activeClassName={styles.active}>
                Widgets
              </NavLink>
            </li>
          </ul>
        </CSSTransition>
      </nav>
      <div className={styles.header}>
        <Header />
      </div>
    </div>
  );
};

export default Dashboard;
