import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATE = "SET_USER_DATE";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUserDate = (userId, email, login, isAuth) => ({
  type: SET_USER_DATE,
  payload: { userId, email, login, isAuth },
});

export const getAuthUserData = () => {
  return (dispatch) => {
    return authAPI.me().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserDate(id, email, login, true));
      }
    });
  };
};

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
        let message =
          response.data.messages.length > 0
            ? response.data.messages[0]
            : "Some error";
        dispatch(stopSubmit("login", { _error: message }));
      }
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserDate(null, null, null, false));
      }
    });
  };
};

export default authReducer;
