import { ResultCodesEnum, ResultCodeForCaptchaEnum } from "./../api/api";
import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATE = "alex_samurai_network/auth/SET_USER_DATE";
const GET_CAPTCHA_URL_SUCCESS =
  "alex_samurai_network/auth/GET_CAPTCHA_URL_SUCCESS";

export type InitialStateType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  captchaUrl: string | null;
};

let initialState: InitialStateType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null, // if null, then captcha is not required
};

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATE:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

type SetAuthUserDateActionPayloadType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

type SetAuthUserDateActionType = {
  type: typeof SET_USER_DATE;
  payload: SetAuthUserDateActionPayloadType;
};

export const setAuthUserDate = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetAuthUserDateActionType => ({
  type: SET_USER_DATE,
  payload: { userId, email, login, isAuth },
});

type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS;
  payload: { captchaUrl: string };
};

export const getCaptchaUrlSuccess = (
  captchaUrl: string
): GetCaptchaUrlSuccessActionType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

export const getAuthUserData = () => async (dispatch: any) => {
  let meData = await authAPI.me();

  if (meData.resultCode === ResultCodesEnum.Success) {
    let { id, email, login } = meData.data;
    dispatch(setAuthUserDate(id, email, login, true));
  }
};

export const login =
  (email: string, password: string, rememberMe: boolean, captcha: any) =>
  async (dispatch: any) => {
    let loginData = await authAPI.login(email, password, rememberMe, captcha);

    if (loginData.resultCode === ResultCodesEnum.Success) {
      dispatch(getAuthUserData());
    } else {
      if (loginData.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
        dispatch(getCaptchaUrl());
      }
      let message =
        loginData.messages.length > 0
          ? loginData.messages[0]
          : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };

export const getCaptchaUrl = () => async (dispatch: any) => {
  let response = await securityAPI.getCaptchaUrl();
  let captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserDate(null, null, null, false));
  }
};

export default authReducer;
