import React from "react";
import style from "./AlertWindow.module.css";

const AlertWindow = (props) => {
  const closeErrorWindow = () => {
    const errorData = null;
    props.passErrorData(errorData);
  };

  return (
    <div className={style.alertError} errorMessage={props.errorMessage}>
      <h4>Attention an error occurred: </h4>
      <p>{props.errorMessage}</p>
      <div className={style.buttonWrapper}>
        <button
          className={style.closeButton}
          onClick={() => {
            closeErrorWindow();
          }}
        ></button>
      </div>
    </div>
  );
};

export default AlertWindow;
