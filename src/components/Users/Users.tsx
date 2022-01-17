import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import { UserType } from "../../types"

type PropsType = {
  currentPage: number
  totalUsersCount: number
  pageSize: number
  onPageChanged: (pageNumber: number) => void
  users: Array<UserType>
  followingInProgress: Array<number>
  unFollowToUser: (userId: number) => void
  followToUser: (userId: number) => void
}

let Users = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  users,
  ...props
}: PropsType): JSX.Element => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
      <div>
        {users.map((u) => (
          <User
            user={u}
            followingInProgress={props.followingInProgress}
            unFollowToUser={props.unFollowToUser}
            followToUser={props.followToUser}
            key={u.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
