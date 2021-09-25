import React from "react";
import Preloader from "../../common/preloader/preloader";
import style from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user_unisex.png";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  // debugger;
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className={style.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} alt="avatar" />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        <p>{profile.fullName}</p>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
