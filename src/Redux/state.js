import {rerenderEntireTree} from "../render";

let state = {
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
};

export let addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postsData.unshift(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};


export default state;