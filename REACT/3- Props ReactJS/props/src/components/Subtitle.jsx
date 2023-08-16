import React from "react";
import styles from "./SubTitle.module.css";

//El prop sería text
const SubTitle = ({ text }) => {
  return <h2 className={styles.subtitle}>{text}</h2>;
};

export default SubTitle;
