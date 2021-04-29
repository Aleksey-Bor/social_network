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
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name="Alex" id="1"/>
                <DialogItem name="Nastya" id="2"/>
                <DialogItem name="Marsya" id="3"/>
                <DialogItem name="Steve" id="4"/>
                <DialogItem name="Bill" id="5"/>
                <DialogItem name="Elon" id="6"/>
            </div>
            <div className={style.messages}>
                <Message message="Hi"/>
                <Message message="How do you like programming?"/>
                <Message message="I love learning React with the IT-KamaSutra."/>
                <Message message="Yo!"/>
            </div>
        </div>
    );
}

export default Dialogs;