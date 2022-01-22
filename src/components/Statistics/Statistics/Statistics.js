import React from "react";
import styles from "./Statistics.module.css";
const StatisticsData = ({ options, state, total, positivePercentage }) => (
  <>
    <div className={styles.stat_section}>
      <h3 className={styles.title}>Statistics</h3>
      <ul className={styles.stat_list}>
        {options.map((option) => (
          <li key={option} className={styles.item}>
            <p className={styles.stat_value}>
              <span className={styles.label}>
                {option.replace(option[0], option[0].toUpperCase())}:
              </span>
              {state[option]}
            </p>
          </li>
        ))}
      </ul>
    </div>
    <div className={styles.total}>
      <p className={styles.total_label}>
        Total feedbacks:<span>{total}</span>
      </p>
      <p className={styles.total_label}>
        Positive feedbacks:<span>{positivePercentage} %</span>
      </p>
    </div>
  </>
);
export default StatisticsData;
