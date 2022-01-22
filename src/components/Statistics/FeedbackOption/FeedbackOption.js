import React from "react";
import styles from "./FeedbackOption.module.css"

const Feedbackoption = ({ options, onLeaveFeedback }) => (
  <ul className={styles.list}>
    {options.map((element) => (
      <li key={element}>
        <button type="button" onClick={onLeaveFeedback} className={styles.button}>
          {element.replace(element[0], element[0].toUpperCase())}
        </button>
      </li>
    ))}
  </ul>
);

export default Feedbackoption;
