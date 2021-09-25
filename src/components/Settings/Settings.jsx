import React from "react";
// import style from "./Settings.module.css"
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const Settings = (props) => {
    return (
        <div>
           Settings /  This section is under construction
        </div>
    )
}

const SettingsContainer = compose(withAuthRedirect)(Settings);

export default SettingsContainer;