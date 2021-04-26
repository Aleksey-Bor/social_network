import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how  are you?" likeCounts="15" />
        <Post message="It's my first post" likeCounts="155" />
        <Post message="Hello Nastya how  are you?" likeCounts="76" />
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  );
};

export default MyPosts;
