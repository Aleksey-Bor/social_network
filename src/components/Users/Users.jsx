import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/images/user_unisex.png";
import { NavLink } from "react-router-dom";
import { usersAPI } from "./../../api/api";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={style.pageButtonsContainer}>
        {pages.map((p) => {
          return (
            <span
              className={
                props.currentPage === p ? style.selectedPage : style.page
              }
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={style.userPhoto}
                  alt="avatar"
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {
                    // debugger;
                    props.toggleFollowingProgress(true, u.id);
                    usersAPI.unFollowToUser(u.id).then((data) => {
                      if (data.resultCode == 0) {
                        props.unfoll(u.id);
                      }
                      props.toggleFollowingProgress(false, u.id);
                    });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {
                    props.toggleFollowingProgress(true, u.id);
                    usersAPI.followToUser(u.id).then((data) => {
                      if (data.resultCode == 0) {
                        props.foll(u.id);
                      }
                      props.toggleFollowingProgress(false, u.id);
                    });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
