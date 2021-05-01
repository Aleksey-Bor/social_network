import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Nastya'},
        {id: 3, name: 'Marsya'},
        {id: 4, name: 'Steve'},
        {id: 5, name: 'Bill'},
        {id: 6, name: 'Elon'}
    ];

    let messagesData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How do you like programming?'},
        {id: 3, message: 'I love learning React with the IT-KamaSutra.'},
        {id: 4, message: 'Yo!'},
        {id: 5, message: 'Yo!'},
        {id: 6, message: 'Yo!'}
    ];

    let dialogsElements = dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>);
    let messagesElement = messagesData.map(el => <Message message={el.message} id={el.id}/>);

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