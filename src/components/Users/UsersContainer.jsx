import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, unfollowAC, setUserAC } from "../../Redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;