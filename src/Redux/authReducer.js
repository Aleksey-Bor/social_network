import { authAPI } from "../api/api";

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
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthUserDate = (userId, email, login) => ({
  type: SET_USER_DATE,
  data: { userId, email, login },
});

export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.me().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserDate(id, email, login));
      }
    });
  };
};

export default authReducer;
