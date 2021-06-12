import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserDate, logIn } from "../../Redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.logIn();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserDate, logIn })(HeaderContainer);
