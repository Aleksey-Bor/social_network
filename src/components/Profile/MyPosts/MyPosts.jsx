import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
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
                <Post message="Hi, how  are you?" likeCount="15"/>
                <Post message="It's  my first post" likeCount="155"/>
                <Post message="Hello Nastya how  are you?" likeCount="76"/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};

export default MyPosts;
