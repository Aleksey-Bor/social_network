import React from "react";
import downloadIcon from "../../../../assets/icons/download-icon.svg";
import style from "./AvatarAddr.module.css";

const AvatarAddr = ({savePhoto}) => {
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div className={style.input__wrapper}>
      <input
        className={style.input__file}
        id="input_file"
        type={"file"}
        onChange={onMainPhotoSelected}
      />
      <label for="input_file" className={style.input__fileButton}>
        <span className={style.input__iconWrapper}>
          <img src={downloadIcon} className={style.input__fileIcon} alt="Download avatar" />
        </span>
        <span className={style.input__fileButtonText}>Upload avatar</span>
      </label>
    </div>
  );
};

export default AvatarAddr;
