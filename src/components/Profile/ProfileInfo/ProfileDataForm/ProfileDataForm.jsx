import React from "react";
// import ProfileStatusWithHooks from "../ProfileStatusWithHooks";
import { Contact } from "../ProfileInfo";
import styleFormsControls from "../../../common/FormsControls/FormsControls.module.css"
import {
  createField,
  Input,
  Textarea,
} from "../../../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";
import style from "../ProfileInfo.module.css";

const ProfileDataForm = ({
  profile,
  handleSubmit,
  error,
  status,
  updateStatus,
  isOwner,
  goToEditMode,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <b>Full Name: </b>
        {createField("Full Name...", "fullName", Input, [])}
      </div>

      <div>
        <b>Looking for a job:</b>{" "}
        {createField("", "lookingForAJob", Input, [], "", { type: "checkbox" })}
      </div>

      <div>
        <b>My professional skills:</b>
        {createField(
          "My professional skills...",
          "lookingForAJobDescription",
          Textarea,
          [],
          ""
        )}
      </div>

      <div>
        <b>About Me:</b>
        {createField("About Me...", "aboutMe", Textarea, [], "")}
      </div>

      <div>
        <b>Contacts:</b>{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={style.contact}>
              <b>{key}:</b>
              {createField(key, "contacts." + key, Textarea, [], "")}
            </div>
          );
        })}
      </div>
      {error && (
        <div className={styleFormsControls.formSummaryError}>{error}</div>
      )}
      <div>
        <button>Save</button>
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataFormReduxForm;
