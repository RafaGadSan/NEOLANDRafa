import React from "react";
import styles from "./Image.module.css";

const Image = ({ src }) => {
  return <img className={styles.image} src={src} />;
};

export default Image;
