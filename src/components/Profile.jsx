import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_lzCX9O5tHHpcNcdbEwllWE_vUkFMabv75AFukPgx93U0mO6cud_qP3UzEwK_KRSieg&usqp=CAU" />
      </div>
      <div>ava+description</div>
      <div>
        My posts
        <div>New post</div>
        <div className={s.posts}>
          <div className={s.item}>post 1</div>
          <div className={s.item}>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
