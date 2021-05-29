import React from "react";
import Preloader from "../../common/preloader/preloader";
import style from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img src="https://image.freepik.com/free-photo/idyllic-beach-scenery-tropical-paradise-mauritius-island_287743-1231.jpg" />
      </div>
      <div className={style.descriptionBlock}>
        <img src={props.profile.photos.large} alt="avatar" />
        <p>{props.profile.fullName}</p>
        ava+description
      </div>
    </div>
  );
};

export default ProfileInfo;
