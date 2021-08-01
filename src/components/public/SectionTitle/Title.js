import React from "react";
import styles from "./Title.module.css";

export function Title({title, color}) {
  return <h1 className={styles.line} style={{color:color||"#9ac9fb", width:'200px'}}>{title}</h1>;
}
