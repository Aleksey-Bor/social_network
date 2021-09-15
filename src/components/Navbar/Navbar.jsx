import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import profileIcon from "../../assets/icons/profile-icon.svg";
import messageIcon from "../../assets/icons/message-icon.svg";
import usersIcon from "../../assets/icons/users-icon.svg";
import newsIcon from "../../assets/icons/news-icon.svg";
import musicIcon from "../../assets/icons/music-icon.svg";
import settingsIcon from "../../assets/icons/settings-icon.svg";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink to="/profile" activeClassName={style.activeLink}>
          <img className={style.NavbarIcon} src={profileIcon} />
          Profile
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/dialogs" activeClassName={style.activeLink}>
          <img className={style.NavbarIcon} src={messageIcon} />
          Massages
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/users" activeClassName={style.activeLink}>
          <img className={style.NavbarIcon} src={usersIcon} />
          Users
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/news" activeClassName={style.activeLink}>
          <img className={style.NavbarIcon} src={newsIcon} />
          News
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/music" activeClassName={style.activeLink}>
          <img className={style.NavbarIcon} src={musicIcon} />
          Music
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/settings" activeClassName={style.activeLink}>
          <img className={style.NavbarIcon} src={settingsIcon} />
          Setings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
