import React from "react";
// import style from "./News.module.css"
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const News = (props) => {
    return (
        <div>
            News / This section is under construction
        </div>
    )
}

const NewsContainer = compose(withAuthRedirect)(News);

export default NewsContainer;