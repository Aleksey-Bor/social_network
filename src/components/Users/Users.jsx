import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  users,
  ...props
}) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

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
