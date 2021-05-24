import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, unfollowAC, setUserAC, setCurrentPageAC, setTotalUsersCountAC} from "../../Redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        foll: (userId) => {
            dispatch(followAC(userId));
        },
        unfoll: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUserAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;