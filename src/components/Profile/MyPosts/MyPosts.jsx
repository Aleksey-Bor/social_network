import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let postsDate = [
        {id: 1, message: 'Hi, how  are you?', likesCount: 12},
        {id: 2, message: 'It\'s  my first post', likesCount: 76},
        {id: 3, message: 'Hello Nastya how  are you?', likesCount: 22},
    ];

    let postsElements = postsDate.map(el => <Post message={el.message} likesCount={el.likesCount} id={el.id}/>);

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
