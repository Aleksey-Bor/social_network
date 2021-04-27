import React from "react";
import style from  "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={`${style.item} ${style.active}`}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/dialogs">Massages</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/music">Music</NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/settings">Setings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
