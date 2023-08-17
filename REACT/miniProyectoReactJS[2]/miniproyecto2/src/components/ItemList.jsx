import React from "react";
import styles from "./ItemList.module.css";

const ItemList = ({ children }, key) => {
  return (
    <li className={styles.itemList} key={key}>
      {children}
    </li>
  );
};

export default ItemList;
