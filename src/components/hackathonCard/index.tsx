import React from "react";
import styles from "./style.module.scss";
import { CardProps } from "../../types";
import { Badge } from "../badge";
import usdcIcon from "../../public/token-branded_usdc.svg";
import trophy from "../../public/Trophy.svg";

export const HackathonCard: React.FC<CardProps> = ({
  leftImage,
  name,
  organiser,
  style,
  onClick,
  date,
  participants,
  prizeAmount,
  rank,
  badgeList,
}) => {
  const containerStyle: React.CSSProperties = {
    cursor: "pointer",
    ...style,
  };

  return (
    <div
      style={containerStyle}
      className={styles["card-container"]}
      onClick={onClick}
    >
      {leftImage && (
        <img
          src={leftImage.length > 1 && leftImage}
          alt={leftImage[0]}
          className={styles["left-image"]}
        />
      )}

      <div className={styles["middle-and-right-container"]}>
        <div className={styles["middle-section"]}>
          <div className={`${styles["middle-text"]}`}>
            <span className={`${styles["name"]}`}>{name}</span> by{" "}
            <span className={`${styles["organiser"]}`}>{organiser}</span>
          </div>
          <div className={styles["sub-heading"]}>
            {prizeAmount && rank && (
              <div className={styles["sub-heading-info"]}>
                <div className={styles["prize-info"]}>
                  <img src={usdcIcon} alt="" />
                  <span className={styles["prize"]}>{prizeAmount}</span> USDC
                </div>
                <div>
                  <img src={trophy} alt="" /> {rank} Place
                </div>
              </div>
            )}
            <div className={styles["badges"]}>
              {badgeList.map((badge) => (
                <Badge type={badge} />
              ))}
            </div>
          </div>
        </div>

        <div className={styles["right-section"]}>
          <div className={styles["right-text"]}>
            <div className={styles["date"]}>{date}</div>
            <div className={styles["participants"]}>
              <div className={styles["participants-num"]}> {participants}</div>{" "}
              participants
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
