import React from "react";
import style from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={style.dialogsItem}>
      <NavLink activeClassName={style.activeLink} to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
