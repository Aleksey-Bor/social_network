import React from 'react';
import {sendMessageActionCreator, updateNewMassageActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    };

    let messageChange = (text) => {
        props.store.dispatch(updateNewMassageActionCreator(text));
    };

    return (
        <Dialogs dialogsPage={state.dialogsPage}
                 sendMessage={sendMessage}
                 messageChange={messageChange}/>
    );
}

export default DialogsContainer;