import React from "react";
import styles from "./style.module.scss";

export const Badge = ({ type }: { type: string }) => {
  return (
    <div className={`${styles["badge"]} ${styles[`${type.toLowerCase()}`]}`}>
      {type}
    </div>
  );
};
