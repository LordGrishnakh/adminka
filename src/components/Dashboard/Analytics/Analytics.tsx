import React from "react";
import VisitsSummary from "../../VisitSummary/VisitsSummary";
import styles from "./Analytics.module.scss"

const Analytics: React.FC = () => {
  return (
    <div className={styles.Analytics}>
      <h2>Analytics</h2>
      <div className={styles.Container}>
        <VisitsSummary />
        <VisitsSummary />
        <VisitsSummary />
        <VisitsSummary />
        <VisitsSummary />
        <VisitsSummary />
        <VisitsSummary />
        <VisitsSummary />
      </div>
    </div>
  )
};

export default Analytics;
