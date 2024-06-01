import React, { useState, useEffect, useRef } from "react";
import avatarIcon from "../../../public/Avatar.svg";
import styles from "./style.module.scss";
import profileIcon from "../../../public/user.svg";
import dashboardIcon from "../../../public/Dashboard.svg";
import apiIcon from "../../../public/Code.svg";
import logOutIcon from "../../../public/log-out.svg";

export const ProfileCard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <div
        className={styles["user-details-container"]}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={avatarIcon} alt="" />
        <div className={styles["user-details"]}>
          <div className={styles["name"]}>Olivia Rhye</div>
          <div className={styles["email"]}>olivia@jiffyscan.xyz</div>
        </div>
      </div>
      {isOpen && (
        <div className={styles["dropdown"]}>
          <div className={styles["dropdown-items"]}>
            <img src={profileIcon} alt="" /> View profile
          </div>
          <div className={styles["dropdown-items"]}>
            <img src={dashboardIcon} alt="" /> Dashboard
          </div>
          <div
            className={styles["dropdown-items"]}
            style={{ borderBottom: "0.7px solid #dadce0" }}
          >
            <img src={apiIcon} alt="" /> API
          </div>
          <div className={styles["dropdown-items"]}>
            <img src={logOutIcon} alt="" /> Log out
          </div>
        </div>
      )}
    </div>
  );
};
