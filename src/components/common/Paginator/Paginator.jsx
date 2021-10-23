import React, { useState } from "react";
import style from "./Paginator.module.css";

let Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 15,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionSize * portionNumber;

  return (
    <div className={style.pageButtonsContainer}>
      {portionNumber > 1 && (
        <button
          className={style.ButtonsPaginator}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          &#60;
        </button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              className={currentPage === p ? style.selectedPage : style.page}
              onClick={() => {
                onPageChanged(p);
              }}
              key={p}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          className={style.ButtonsPaginator}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          &#62;
        </button>
      )}
    </div>
  );
};

export default Paginator;
