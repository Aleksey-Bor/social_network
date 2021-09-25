import React from "react";
import Preloader from "../../common/preloader/preloader";
import style from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user_unisex.png";

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={style.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} alt="avatar" />
        <p>{profile.fullName}</p>
        <ProfileStatusWithHooks
          status={status}
          updateStatus={updateStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
