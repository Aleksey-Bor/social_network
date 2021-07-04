import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { reduxForm, Field } from "redux-form";
// import { Redirect } from "react-router-dom";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogsData.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));
  let messagesElement = props.dialogsPage.messagesData.map((el) => (
    <Message message={el.message} id={el.id} />
  ));

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>
        <div>{messagesElement}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component="textarea"
          name="newMessageBody"
          placeholder="Enter your message"
        />
      </div>
      <div>
        <button>Send message</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({
  form: "dialogAddMassageForm",
})(AddMessageForm);

export default Dialogs;
