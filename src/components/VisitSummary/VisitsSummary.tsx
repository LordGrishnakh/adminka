import React from "react";
import styles from "./VisitsSummary.module.scss";

import {
  getTotalVisits,
  getTotalLogins,
  getTotalSignOuts,
  getTotalRate,
} from "../../utilFunctions";

const VisitsSummary: React.FC = () => {
  return (
    <div className={styles.Container}>
      <h1>Visits Today</h1>
      <div className={styles.TotalVisits}>
        <span>{getTotalVisits()}</span>
        {/* svg growth of decline here */}
      </div>
      <div className={styles.Breakdown}>
        <div className={styles.Rate}>
          <span>{getTotalLogins()}</span>
          <p>Logins</p>
        </div>
        <div className={styles.Rate}>
          <span>{getTotalSignOuts()}</span>
          <p>Sign Out</p>
        </div>
        <div className={styles.Rate}>
          <span>{getTotalRate()}</span>
          <p>Rate</p>
        </div>
      </div>
    </div>
  );
};

export default VisitsSummary;
