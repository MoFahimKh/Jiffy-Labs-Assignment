import React from "react";
import styles from "./style.module.scss";
import searchIcon from "../../public/uil_search.svg";
export const SearchInput = () => {
  return (
    <div className={styles["input-container"]}>
      <img src={searchIcon} alt="" />
      <input
        className={styles["input"]}
        type="text"
        placeholder="Search Bounties, Profiles, and more..."
      />
    </div>
  );
};
