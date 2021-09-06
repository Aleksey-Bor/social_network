import React from "react";
import style from "./Paginator.module.css";


let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={style.pageButtonsContainer}>
      {pages.map((p) => {
        return (
          <span
            className={
              currentPage === p ? style.selectedPage : style.page
            }
            onClick={() => {
             onPageChanged(p);
            }}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
