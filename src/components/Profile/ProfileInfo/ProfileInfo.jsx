import React from "react";
import style from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_lzCX9O5tHHpcNcdbEwllWE_vUkFMabv75AFukPgx93U0mO6cud_qP3UzEwK_KRSieg&usqp=CAU"/>
            </div>
            <div className={style.descriptionBlock}>ava+description</div>
        </div>
    );
};

export default ProfileInfo;
