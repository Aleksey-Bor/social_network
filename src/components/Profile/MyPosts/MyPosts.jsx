import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={style.posts}>
        <Post message="Hi, how  are you?" likeCount="15" />
        <Post message="It'style my first post" likeCount="155" />
        <Post message="Hello Nastya how  are you?" likeCount="76" />
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  );
};

export default MyPosts;
