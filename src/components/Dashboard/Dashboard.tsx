import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dashboard.module.scss";

const Dashboard: React.FC = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [opened, setOpened] = useState(true);
  return (
    <nav
      className={
        expanded ? `${styles.Container} ${styles.Expanded}` : styles.Container
      }
      onMouseEnter={() => {
        setExpanded(true);
        setOpened(true);
      }}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className={styles.LogoContainer}>
        <img src="images/reactAdminkaLogoWhite.png" alt="Logo" />
      </div>
      <ul className={styles.DashboardSection}>
        <div onClick={() => setOpened(!opened)}>
          <div className={styles.circle}></div>
          {expanded && <h2>Dashboard</h2>}
        </div>
        {opened && (
          <>
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
          </>
        )}
      </ul>
    </nav>
  );
};

export default Dashboard;
