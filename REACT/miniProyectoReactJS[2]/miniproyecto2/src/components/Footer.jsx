import React from "react";
import styles from "./Footer.module.css";
import Image from "./Image";

const Footer = ({ children }) => {
  return (
    <footer className={styles.footer}>
      {children}
      <Image
        src="https://res.cloudinary.com/ds5eoiiqk/image/upload/v1690131660/cubito_fqpcsk.gif"
        alt="cubito"
        width="300"
        height="300"
      />
    </footer>
  );
};

export default Footer;
