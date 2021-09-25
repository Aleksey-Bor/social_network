import React from "react";
// import style from "./Music.module.css"
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const Music = (props) => {
    return (
        <div>
            Music / This section is under construction
        </div>
    )
}

const MusicContainer = compose(withAuthRedirect)(Music);

export default MusicContainer;