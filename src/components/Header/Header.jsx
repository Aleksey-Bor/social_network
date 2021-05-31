import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img src="https://api.freelogodesign.org/assets/thumb/logo/3343895_400.png" />
      <div className={style.loginBlock}>
        {props.isAuth ? (
          <span>{props.login}</span>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
