import React, { useState } from "react";
import style from "./Paginator.module.css";

type PropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  portionSize?: number
}

let Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 15,
}: PropsType): JSX.Element => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages: Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionSize * portionNumber;

  return (
    <div className={style.pageButtonsContainer}>
      {portionNumber > 2 && (
        <button
          className={style.ButtonsPaginator}
          onClick={() => {
            setPortionNumber(1);
          }}
        >
          &#60;&#60;
        </button>
      )}
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
      {portionCount > portionNumber && (
        <button
          className={style.ButtonsPaginator}
          onClick={() => {
            setPortionNumber(portionCount);
          }}
        >
          &#62;&#62;
        </button>
      )}
    </div>
  );
};

export default Paginator;
