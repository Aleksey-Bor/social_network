import React from "react";
import { connect } from "react-redux";
import {
  followToUser,
  unFollowToUser,
  setCurrentPage,
  getUsers,
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getUsersData,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from "../../Redux/usersSelectors";
import { UserType } from "../../types";
import { AppStateType } from "../../Redux/redux-store";

type PropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount: number
  users: Array<UserType>

  followingInProgress: Array<number>
  getUsers: (currentPage: number, pageSize: number) => void
  unFollowToUser: (userId: number) => void
  followToUser: (userId: number) => void
}

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.getUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    const { pageSize } = this.props;
    this.props.getUsers(pageNumber, pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          followToUser={this.props.followToUser}
          unFollowToUser={this.props.unFollowToUser}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state: AppStateType) => {
  return {
    users: getUsersData(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    followToUser,
    unFollowToUser,
    setCurrentPage,
    getUsers,
  }),
  withAuthRedirect
)(UsersContainer);
