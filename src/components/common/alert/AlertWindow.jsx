import React from "react";
import style from "./AlertWindow.module.css";
import buttonsImg from "../../../assets/icons/close-button.png"

const AlertWindow = (props) => {
  // debugger
  return (
    <div className={style.alertError} errorMessage={props.errorMessage}>
      <h4>Attention an error occurred: </h4> 
      <p>{props.errorMessage}</p>
      <div className={style.buttonWrapper}>
        <button className={style.closeButton}></button>
      </div>
    </div>
  );
};

export default AlertWindow;
