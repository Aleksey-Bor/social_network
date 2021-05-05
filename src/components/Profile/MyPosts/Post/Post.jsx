import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzaMc-3F_Ey437EAdp97a4dPrHCI9HI33nA&usqp=CAU" />
      {props.message}
      <div>
        <span>like: {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
