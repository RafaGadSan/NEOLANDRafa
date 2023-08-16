import React from "react";
import styles from "./Image.module.css";

const Image = ({ src, alt, width, height }) => {
  return (
    <img
      className={styles.image}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default Image;
