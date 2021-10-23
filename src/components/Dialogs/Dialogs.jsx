import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { reduxForm, Field } from "redux-form";
import { maxLengthCreator, minLengthCreator } from "../../utils/validators/validators";
import { Textarea } from "../common/FormsControls/FormsControls";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogsData.map((el) => (
    <DialogItem  name={el.name} id={el.id} key={el.id} />
  ));
  let messagesElement = props.dialogsPage.messagesData.map((el) => (
    <Message message={el.message} id={el.id} key={el.id} />
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

let maxLengthCreator50 = maxLengthCreator(200);
let minLengthCreator2 = minLengthCreator(2);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          className={style.messageTextarea}
          component={Textarea}
          name="newMessageBody"
          placeholder="Enter your message"
          validate={[maxLengthCreator50, minLengthCreator2]}
        />
      </div>
      <div>
        <button className={style.messageButton}>Send message</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({
  form: "dialogAddMassageForm",
})(AddMessageForm);

export default Dialogs;
