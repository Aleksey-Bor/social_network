import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "./../../../Redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 postsData={state.profilePage.postsData}
                 newPostsText={state.profilePage.newPostText}/>
    );
};

export default MyPostsContainer;
