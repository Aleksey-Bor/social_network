import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {



    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {props.dialogsElements}
            </div>
            <div className={style.messages}>
                {props.messagesElement}
            </div>
        </div>
    );
}

export default Dialogs;