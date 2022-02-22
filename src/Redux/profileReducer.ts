import { Dispatch } from "react";
import { AppStateType } from "./redux-store";
import { ThunkAction } from "redux-thunk";
import { stopSubmit } from "redux-form";
import { usersAPI, profileAPI } from "../api/api";
import { PostsDataType, ProfileType, PhotosType } from "../types";

const ADD_POST = "alex_samurai_network/profile/ADD-POST";
const UPDATE_NEW_POST_TEXT =
  "alex_samurai_network/profile/UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "alex_samurai_network/profile/SET_USER_PROFILE";
const SET_STATUS = "alex_samurai_network/profile/SET_STATUS";
const DELETE_POST = "alex_samurai_network/profile/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "alex_samurai_network/profile/SAVE_PHOTO_SUCCESS";

let initialState = {
  postsData: [
    { id: 1, message: "Hi, how  are you?", likesCount: 12 },
    { id: 2, message: "It's  my first post", likesCount: 76 },
    { id: 3, message: "Hello Nastya how  are you?", likesCount: 22 },
  ] as Array<PostsDataType>,
  profile: null as ProfileType | null,
  status: "",
  newPostText: "",
};

export type InitialStateType = typeof initialState;

const profileReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        message: action.newPostText,
        likesCount: 0,
      };
      let stateCopy = { ...state };
      stateCopy.postsData = [...state.postsData];
      stateCopy.postsData.push(newPost);
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case DELETE_POST: {
      //case for test
      return {
        ...state,
        postsData: state.postsData.filter((p) => p.id !== action.postId),
      };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    }
    default:
      return state;
  }
};

type ActionsType =
  | AddPostActionCreatorType
  | DeletePostType
  | SavePhotoSuccessType
  | SetStatusType
  | UpdateNewPostTextActionCreatorType
  | SetUserProfileType;

type AddPostActionCreatorType = { type: typeof ADD_POST; newPostText: string };

export const addPostActionCreator = (
  newPostText: string
): AddPostActionCreatorType => ({
  type: ADD_POST,
  newPostText,
});

type DeletePostType = { type: typeof DELETE_POST; postId: number };

export const deletePost = (postId: number): DeletePostType => ({
  type: DELETE_POST,
  postId,
});

type SavePhotoSuccessType = {
  type: typeof SAVE_PHOTO_SUCCESS;
  photos: PhotosType;
};

export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

type SetStatusType = { type: typeof SET_STATUS; status: string };

export const setStatus = (status: string): SetStatusType => ({
  type: SET_STATUS,
  status,
});

type UpdateNewPostTextActionCreatorType = {
  type: typeof UPDATE_NEW_POST_TEXT;
  newText: string;
};

export const updateNewPostTextActionCreator = (
  text: string
): UpdateNewPostTextActionCreatorType => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

type SetUserProfileType = {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
};

export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({
  type: SET_USER_PROFILE,
  profile,
});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>;
// type DispatchType = Dispatch<ActionsType>;
// type GetStateType = () => AppStateType;

export const getUserProfile = (userId: number): ThunkType => {
  return async (dispatch /* : DispatchType */) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
  };
};

export const getStatus = (userId: number): ThunkType => {
  return async (dispatch /* : DispatchType */) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
  };
};

export const updateStatus = (status: string): ThunkType => {
  return async (dispatch /* : DispatchType */) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    } else {
      return Promise.reject(response.data.messages[0]);
    }
  };
};

export const savePhoto = (file: any): ThunkType => {
  //??
  return async (dispatch /* : DispatchType */) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
    } else {
      return Promise.reject(response.data.messages[0]);
    }
  };
};

export const saveProfile = (profile: ProfileType): ThunkType => {
  return async (dispatch: any, getState: any) => {
    //!!! ???
    let userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId));
    } else {
      dispatch(
        stopSubmit("edit-profile", { _error: response.data.messages[0] })
      );
      return Promise.reject(response.data.messages[0]);
    }
  };
};

export default profileReducer;
