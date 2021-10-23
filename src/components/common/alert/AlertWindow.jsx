import React from "react";
import style from "./AlertWindow.module.css";

const AlertWindow = (props) => {
  const closeErrorWindow = () => {
    const errorData = null;
    props.passErrorData(errorData);
  };

  return (
    <div className={style.alertError} errormessage={props.errormessage}>
      <h4>Attention an error occurred: </h4>
      <p>{props.errormessage}</p>
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
