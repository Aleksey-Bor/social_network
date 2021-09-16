import React from "react";
import style from "./Post.module.css";
import likeIcon from "./../../../../assets/icons/like-icon.png"

const Post = (props) => {
  return (
    <div className={style.item}>
      <img className={style.avatarImage} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzaMc-3F_Ey437EAdp97a4dPrHCI9HI33nA&usqp=CAU" />
      {props.message}
      <div>
        <span><img className={style.likeImage} src={likeIcon} alt="Like image" title="Function in development"/>: {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
