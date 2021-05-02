import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>);
    let messagesElement = props.state.messagesData.map(el => <Message message={el.message} id={el.id}/>);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElement}
            </div>
        </div>
    );
}

export default Dialogs;