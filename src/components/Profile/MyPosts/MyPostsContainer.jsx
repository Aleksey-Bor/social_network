import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "./../../../Redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let postChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };

    return (
        <MyPosts updateNewPostText={postChange}
                 addPost={addPost}
                 postsData={state.profilePage.postsData}
                 newPostText={state.profilePage.newPostText}/>
    );
};

export default MyPostsContainer;
