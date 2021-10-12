import React from "react";
import { reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { createField, Input } from "../common/FormsControls/FormsControls";
import { connect } from "react-redux";
import { login } from "./../../Redux/authReducer";
import { Redirect } from "react-router-dom";
import styleFormsControls from "../common/FormsControls/FormsControls.module.css";
import style from "./Login.style.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  let className = style.loginForms;
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", Input, [required], className)}
      {createField("Password", "password", Input, [required], className, {
        type: "password",
      })}
      {createField(
        null,
        "rememberMe",
        Input,
        [],
        "loginCheckBox", //This value is className. It is not used, it is passed to make the code clearer
        { type: "checkbox" },
        "Remember me"
      )}

      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl && createField(
        "Symbols for image",
        "captcha",
        Input,
        [required],
        "", //This value is className. It is not used
        {},
      )}

      {error && (
        <div className={styleFormsControls.formSummaryError}>{error}</div>
      )}
      <div>
        <button className={style.loginButton}>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1 className={style.loginHeader}>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
