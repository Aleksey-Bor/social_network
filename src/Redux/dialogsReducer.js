const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW_-MESSAGE-TEXT';

let initialState = {
    messagesData: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How do you like programming?'},
        {id: 3, message: 'I love learning React with the IT-KamaSutra.'},
        {id: 4, message: 'Yo!'},
        {id: 5, message: 'Yo!'},
        {id: 6, message: 'Yo!'}
    ],
    dialogsData: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Nastya'},
        {id: 3, name: 'Marsya'},
        {id: 4, name: 'Steve'},
        {id: 5, name: 'Bill'},
        {id: 6, name: 'Elon'}
    ],
    newMessagesText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 7,
                message: state.newMessagesText
            };
            let copyState = {...state};
            copyState.messagesData = [...state.messagesData]
            copyState.messagesData.push(newMessage);
            state.newMessagesText = '';
            return copyState;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let copyState = {...state};
            copyState.newMessagesText = action.newText;
            return copyState;
        }
        default: return state;
    }
};

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export const updateNewMassageActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
});

export default dialogsReducer;