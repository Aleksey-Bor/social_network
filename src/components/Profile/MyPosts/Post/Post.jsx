import React from "react";
import style from "./Post.module.css";
import likeIcon from "./../../../../assets/icons/like-icon.png";

const Post = (props) => {
  return (
    <div className={style.item}>
    {props.avatar && <img
      className={style.avatarImage}
      src={props.avatar}
      alt="users avatar"
    />}
      {props.message}
      <div>
        <span>
          <img
            className={style.likeImage}
            src={likeIcon}
            alt="Like"
            title="Function in development"
          />
          : {props.likesCount}
        </span>
      </div>
    </div>
  );
};

export default Post;
