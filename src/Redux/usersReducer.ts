import { usersAPI } from "../api/api";
import { updateObjectinFrray } from "../utils/objectHelpers";
import { UserType } from "../types";

const FOLLOW = "alex_samurai_network/users/FOLLOW";
const UNFOLLOW = "alex_samurai_network/users/UNFOLLOW";
const SET_USERS = "alex_samurai_network/users/SET-USERS";
const SET_CURRENT_PAGE = "alex_samurai_network/users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT =
  "alex_samurai_network/users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "alex_samurai_network/users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS =
  "alex_samurai_network/users/TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>, //array of users id
};

export type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectinFrray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectinFrray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

type FollowSuccessType = {
  type: typeof FOLLOW;
  userId: number;
};

export const followSuccess = (userId: number): FollowSuccessType => ({
  type: FOLLOW,
  userId,
});

type UnfollowSuccessType = {
  type: typeof UNFOLLOW;
  userId: number;
};

export const unfollowSuccess = (userId: number): UnfollowSuccessType => ({
  type: UNFOLLOW,
  userId,
});

type SetUsersType = {
  type: typeof SET_USERS;
  users: Array<UserType>;
};

export const setUsers = (users: Array<UserType>): SetUsersType => ({
  type: SET_USERS,
  users,
});

type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};

export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage,
});

type SetTotalUsersCountType = {
  type: typeof SET_TOTAL_USERS_COUNT;
  count: number;
};

export const setTotalUsersCount = (
  totalUsersCount: number
): SetTotalUsersCountType => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});

type ToggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFetching: boolean;
};

export const toggleIsFetching = (
  isFetching: boolean
): ToggleIsFetchingType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

type ToggleFollowingProgressType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS;
  isFetching: boolean;
  userId: number;
};

export const toggleFollowingProgress = (
  isFetching: boolean,
  userId: number
): ToggleFollowingProgressType => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const getUsers = (currentPage: number, pageSize: number) => {
  return async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));

    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};

const followUnfollowFlow = async (
  dispatch: any,
  userId: number,
  apiMethod: any,
  actionCreator: any
) => {
  dispatch(toggleFollowingProgress(true, userId));
  let data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const followToUser = (userId: number) => {
  return async (dispatch: any) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.followToUser.bind(usersAPI),
      followSuccess
    );
  };
};

export const unFollowToUser = (userId: number) => {
  return async (dispatch: any) => {
    followUnfollowFlow(
      dispatch,
      userId,
      usersAPI.unFollowToUser.bind(usersAPI),
      unfollowSuccess
    );
  };
};

export default usersReducer;
