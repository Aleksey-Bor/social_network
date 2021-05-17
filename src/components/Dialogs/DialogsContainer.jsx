import React from 'react';
import {sendMessageActionCreator, updateNewMassageActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let sendMessage = () => {
                        store.dispatch(sendMessageActionCreator());
                    };

                    let messageChange = (text) => {
                        store.dispatch(updateNewMassageActionCreator(text));
                    };
                    return (
                        <Dialogs dialogsPage={state.dialogsPage}
                                 sendMessage={sendMessage}
                                 messageChange={messageChange}/>
                    );
                }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;