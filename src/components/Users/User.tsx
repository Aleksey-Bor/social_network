import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/images/user_unisex.png";
import { NavLink } from "react-router-dom";
import { UserType } from "../../types";

type PropsType = {
  user: UserType
  followingInProgress: Array<number>
  unFollowToUser: (userId: number) => void
  followToUser: (userId: number) => void
}

let User = ({ user, followingInProgress, unFollowToUser, followToUser }: PropsType): JSX.Element => {
  return (
    <div className={style.itemUser}>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              className={style.userPhoto}
              alt="avatar"
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              className={style.button}
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unFollowToUser(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              className={style.button}
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                followToUser(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div className={style.userName}>{user.name}</div>
          <div className={style.status}>{user.status}</div>
        </span>
        <span>
          <div>{"user.location.country"}</div>
          <div>{"user.location.city"}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
