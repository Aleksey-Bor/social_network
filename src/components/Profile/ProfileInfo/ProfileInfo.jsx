import React from "react";
import Preloader from "../../common/preloader/preloader";
import style from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user_unisex.png";
import AvatarAddr from "./AvatarAddr/AvatarAddr";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={style.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} alt="avatar" />
        {isOwner && <AvatarAddr savePhoto={savePhoto} />}
        <div>
          <div>
            <p>{profile.fullName}</p>
          </div>
          <div>
            <ProfileStatusWithHooks
              status={status}
              updateStatus={updateStatus}
            />
          </div>
          <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
          </div>
          {profile.lookingForAJob && (
            <div>
              <b>Looking for a job:</b> {profile.lookingForAJobDescription}
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
                  contactTitle={key}
                  contactValue={profile.contacts[key]}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

export default ProfileInfo;
