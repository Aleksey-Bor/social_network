import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import socialNetworkLogo from "./../../assets/images/logo.jpg"


const Header = (props) => {
  return (
    <header className={style.header}>
      <img src={socialNetworkLogo} />
      <div className={style.loginBlock}>
        {props.isAuth ? (
          <div>
            <span>
              {props.login} <button className={style.logoutButton} onClick={props.logout}>Logout</button>
            </span>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
