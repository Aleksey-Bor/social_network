const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW_-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newMessagesText
            };
            state.messagesData.push(newMessage);
            state.newMessagesText = '';
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessagesText = action.newText;
            break;
    }

    return state;
};

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export const updateNewMassageActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
});

export default dialogsReducer;