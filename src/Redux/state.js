let  store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how  are you?', likesCount: 12},
                {id: 2, message: 'It\'s  my first post', likesCount: 76},
                {id: 3, message: 'Hello Nastya how  are you?', likesCount: 22},
            ],
            newPostText: 'Enter your message...'
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
        },
    },
    _callSubscriber() {},

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.unshift(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};


export default store;
window.store = store;