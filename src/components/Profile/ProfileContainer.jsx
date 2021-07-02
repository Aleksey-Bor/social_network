import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from "../../Redux/profileReducer";
import { withRouter } from "react-router";
// import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 1049;
    }

    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter
  // withAuthRedirect Нам не нужно чтобы Профиль был недоступым для незалогированных пользователей
)(ProfileContainer);
