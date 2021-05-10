import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {sendMessageActionCreator, updateNewMassageActionCreator} from "../../Redux/dialogsReducer";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>);
    let messagesElement = props.dialogsPage.messagesData.map(el => <Message message={el.message} id={el.id}/>);
    let newMessageBody = props.dialogsPage.newMessagesText;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator());
    };

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewMassageActionCreator(text));
    };

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>
                    {messagesElement}
                </div>
                <div>
                    <textarea value={newMessageBody} onChange={onMessageChange} placeholder='Enter your message'/>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>
                        Send message
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;