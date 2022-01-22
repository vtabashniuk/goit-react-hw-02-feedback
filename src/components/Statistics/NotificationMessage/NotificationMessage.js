import React from "react";
import styles from "./NotificationMessage.module.css"

const NotificationMessage = ({ message }) => <p className={styles.message}>{message}</p>;

export default NotificationMessage;
