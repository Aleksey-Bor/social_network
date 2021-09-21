import React from "react";
import style from "../Dialogs.module.css";

const Message = (props) => {
  return (
    <div className={style.messages}>
      <div className={style.messageMy}>{props.message}</div>
    </div>
  );
};

export default Message;
