import React from "react";
import style from "./style.module.scss";
import logo from "../../public/Jiffyscan-icon.svg";
import arrow from "../../public/Arrow.svg";
import { SearchBar } from "./Searchbar";
import { ProfileCard } from "./profileCard";
import nightModeIcon from "../../public/Theme.svg";

export const Navbar = () => {
  return (
    <div className={style["container"]}>
      <img src={logo} alt="" className={style["logo"]} />
      <div className={style["middle-section"]}>
        <div>Home</div>
        <div className={style["middle-section-menu"]}>
          Blockchain <img src={arrow} alt="" />
        </div>
        <div className={style["middle-section-menu"]}>
          Developers <img src={arrow} alt="" />
        </div>
        <div className={style["middle-section-menu"]}>
          More <img src={arrow} alt="" />
        </div>
        <div>About 4337 </div>
      </div>
      <SearchBar />
      <ProfileCard />
      <img src={nightModeIcon} alt="" />
    </div>
  );
};
