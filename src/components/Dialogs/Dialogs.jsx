import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsDate = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Nastya'},
        {id: 3, name: 'Marsya'},
        {id: 4, name: 'Steve'},
        {id: 5, name: 'Bill'},
        {id: 6, name: 'Elon'}
    ];

    let messagesDate = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How do you like programming?'},
        {id: 3, message: 'I love learning React with the IT-KamaSutra.'},
        {id: 4, message: 'Yo!'},
        {id: 5, message: 'Yo!'},
        {id: 6, message: 'Yo!'}
    ];

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name={dialogsDate[0].name} id={dialogsDate[0].id}/>
                <DialogItem name={dialogsDate[1].name} id={dialogsDate[1].id}/>
                <DialogItem name={dialogsDate[2].name} id={dialogsDate[2].id}/>
                <DialogItem name={dialogsDate[3].name} id={dialogsDate[3].id}/>
                <DialogItem name={dialogsDate[4].name} id={dialogsDate[4].id}/>
                <DialogItem name={dialogsDate[5].name} id={dialogsDate[5].id}/>
            </div>
            <div className={style.messages}>
                <Message message={messagesDate[0].message} id={messagesDate[0].id}/>
                <Message message={messagesDate[1].message} id={messagesDate[1].id}/>
                <Message message={messagesDate[2].message} id={messagesDate[2].id}/>
                <Message message={messagesDate[3].message} id={messagesDate[3].id}/>
                <Message message={messagesDate[4].message} id={messagesDate[4].id}/>
            </div>
        </div>
    );
}

export default Dialogs;