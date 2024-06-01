import React, { useState } from "react";
import styles from "./style.module.scss";
import filterIcon from "../../public/octicon_filter-16.svg";
import arrowLight from "../../public/Arrow-light.svg";
import { FILTERS } from "../../utils/constants";
import { handleCheckboxChange } from "../../utils/handleCheckboxChange";

export const TabBar = ({
  selectedTab,
  setSelectedTab,
  selectedFilters,
  setSelectedFilters,
}: {
  selectedTab: string;
  setSelectedTab: any;
  selectedFilters: string[];
  setSelectedFilters: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const allSelected = selectedFilters.length === FILTERS.length;
  const displayText = allSelected
    ? "All"
    : selectedFilters.filter((filter) => filter !== "All").join(", ");

  return (
    <div>
      <div className={styles["container"]}>
        <div className={styles["tab-section"]}>
          <div className={styles["title"]}>Work History</div>
          <button
            onClick={() => setSelectedTab("completed")}
            className={
              selectedTab === "completed"
                ? styles["selected-button"]
                : styles["button"]
            }
          >
            Completed
          </button>
          <button
            onClick={() => setSelectedTab("in-review")}
            className={
              selectedTab === "in-review"
                ? styles["selected-button"]
                : styles["button"]
            }
          >
            In Review
          </button>
        </div>
        <div className={styles["filter-container"]}>
          <div className={styles["filter-by"]}>
            <img src={filterIcon} alt="" /> Filter By
          </div>
          <div
            className={styles["filter-dropdown"]}
            onClick={() => setIsOpen(!isOpen)}
          >
            {displayText.length > 12
              ? `${displayText.substring(0, 14)}...`
              : displayText}
            {displayText.length === 0 && "Select"}
            <img src={arrowLight} alt="" />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={styles["dropdown"]}>
          {FILTERS.map((filter) => (
            <div key={filter} className={styles["dropdown-items"]}>
              <input
                type="checkbox"
                name={filter}
                checked={selectedFilters.includes(filter)}
                onChange={() =>
                  handleCheckboxChange(
                    filter,
                    FILTERS,
                    selectedFilters,
                    setSelectedFilters
                  )
                }
              />
              <div>{filter}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
