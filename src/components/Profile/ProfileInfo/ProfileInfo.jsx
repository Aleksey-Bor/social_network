import React, { useState } from "react";
import Preloader from "../../common/preloader/preloader";
import style from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user_unisex.png";
import AvatarAddr from "./AvatarAddr/AvatarAddr";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={style.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} alt="avatar" />
        {isOwner && <AvatarAddr savePhoto={savePhoto} />}
        {editMode ? (
          <ProfileDataForm profile={profile} />
        ) : (
          <ProfileData
            goToEditMode={() => {
              setEditMode(true);
            }}
            profile={profile}
            status={status}
            updateStatus={updateStatus}
            isOwner={isOwner}
          />
        )}
      </div>
    </div>
  );
};

const ProfileData = ({
  profile,
  status,
  updateStatus,
  isOwner,
  goToEditMode,
}) => {
  return (
    <div>
      <div>
        <p>{profile.fullName}</p>
      </div>
      <div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
      <div>
        <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>Work description:</b> {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About Me:</b> {profile.aboutMe}
      </div>
      <div>
        <b>Contacts:</b>{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>Edit</button>
        </div>
      )}
    </div>
  );
};



const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={style.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

export default ProfileInfo;
