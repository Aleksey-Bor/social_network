import React from "react";
import Preloader from "../../common/preloader/preloader";
import style from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user_unisex.png";
import AvatarAddr from "./AvatarAddr/AvatarAddr";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  // debugger;
  if (!profile) {
    return <Preloader />;
  }



  return (
    <div>
      <div className={style.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} alt="avatar" />
        {isOwner && <AvatarAddr savePhoto={savePhoto}/>}
        <p>{profile.fullName}</p>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
