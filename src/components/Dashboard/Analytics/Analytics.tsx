import React from "react";
import VisitsSummary from "../../VisitSummary/VisitsSummary";
import styles from "./Analytics.module.scss"

const Analytics: React.FC = () => {
  return (
    <div className={styles.Analytics}>
      <h2>Analytics</h2>
      <div className={styles.Container}>
        <div className={styles.VisitsSummary}>
          <VisitsSummary />
        </div>
        <div className={styles.RevenueBreakdown}>
          <></>
        </div>
        <div className={styles.AppPerformance}>
          <></>
        </div>
        <div className={styles.DailyChart}>
          <></>
        </div>
        <div className={styles.Statistics}>
          <></>
        </div>
        <div className={styles.StatisticsRNS}>
          <></>
        </div>
        <div className={styles.Calendar}>
          <></>
        </div>
        <div className={styles.Todo}>
          <></>
        </div>
      </div>
    </div>
  )
};

export default Analytics;
