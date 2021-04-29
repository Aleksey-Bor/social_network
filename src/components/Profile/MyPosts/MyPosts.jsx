import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let postsDate = [
        {id: 1, message: 'Hi, how  are you?', likesCount: 12},
        {id: 2, message: 'It\'s  my first post',  likesCount: 76},
        {id: 3, message: 'Hello Nastya how  are you?',  likesCount: 22},
    ];

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
                <Post message={postsDate[0].message} likeCount={postsDate[0].likesCount} id={postsDate[0].id}/>
                <Post message={postsDate[1].message} likeCount={postsDate[1].likesCount} id={postsDate[1].id}/>
                <Post message={postsDate[2].message} likeCount={postsDate[2].likesCount} id={postsDate[2].id}/>
            </div>
        </div>
    );
};

export default MyPosts;
