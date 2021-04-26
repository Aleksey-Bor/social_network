import React from "react";
import style from  "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={`${style.item} ${style.active}`}>
        <a>Profile</a>
      </div>
      <div className={style.item}>
        <a>Massages</a>
      </div>
      <div className={style.item}>
        <a>News</a>
      </div>
      <div className={style.item}>
        <a>Music</a>
      </div>
      <div className={style.item}>
        <a>setings</a>
      </div>
    </nav>
  );
};

export default Navbar;
