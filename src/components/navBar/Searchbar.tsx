import React, { useState } from "react";
import styles from "./style.module.scss";
import searchIcon from "../../public/Lightning.svg";
import arrow from "../../public/Arrow-light.svg";

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const displayValue =
    inputValue.length > 26 ? `${inputValue.substring(0, 26)}...` : inputValue;

  return (
    <div
      className={`${styles["search-container"]} ${
        isFocused ? styles["focused"] : ""
      }`}
    >
      <div className={styles["search-icon-container"]}>
        <img src={searchIcon} alt="search icon" />
        <img src={arrow} alt="arrow icon" style={{ marginRight: "8px" }} />
      </div>

      <input
        className={styles["search-input"]}
        type="text"
        placeholder="Search an userOp"
        value={isFocused ? inputValue : displayValue}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};
