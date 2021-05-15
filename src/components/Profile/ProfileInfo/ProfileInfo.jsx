import React from "react";
import style from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src="https://image.freepik.com/free-photo/idyllic-beach-scenery-tropical-paradise-mauritius-island_287743-1231.jpg"/>
            </div>
            <div className={style.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
};

export default ProfileInfo;
