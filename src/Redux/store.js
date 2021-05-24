//This store does not participate in the operation of the application. It is left as a cheat sheet.
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how  are you?', likesCount: 12},
                {id: 2, message: 'It\'s  my first post', likesCount: 76},
                {id: 3, message: 'Hello Nastya how  are you?', likesCount: 22},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },

    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPagee = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

export default store;
window.store = store;