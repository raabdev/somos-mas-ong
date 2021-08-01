import React from "react";
import styles from "./ContainerElement.module.css";

export function ContainerElement({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}
