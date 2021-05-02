import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Post from "./components/Profile/MyPosts/Post/Post";
import DialogItem from "./components/Dialogs/DialogItem/DialogItem";
import Message from "./components/Dialogs/Message/Message";

let postsDate = [
    {id: 1, message: 'Hi, how  are you?', likesCount: 12},
    {id: 2, message: 'It\'s  my first post', likesCount: 76},
    {id: 3, message: 'Hello Nastya how  are you?', likesCount: 22},
];

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




ReactDOM.render(<App postsData={postsDate} messagesData={messagesData} dialogsData={dialogsData}/>, document.getElementById("root"));


