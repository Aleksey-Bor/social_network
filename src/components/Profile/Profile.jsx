import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_lzCX9O5tHHpcNcdbEwllWE_vUkFMabv75AFukPgx93U0mO6cud_qP3UzEwK_KRSieg&usqp=CAU" />
      </div>
      <div>ava+description</div>
      <MyPosts/>
    </div>
  );
};

export default Profile;
