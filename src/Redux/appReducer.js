import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";
const AN_ERROR_HAS_OCCURRED = "AN_ERROR_HAS_OCCURRED";

let initialState = {
  initialized: false,
  errorData: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }
    case AN_ERROR_HAS_OCCURRED: {
      return { ...state, errorData: action.errorData };
    }
    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const anErrorHasOccurred = (errorData) => ({
  type: AN_ERROR_HAS_OCCURRED,
  errorData,
});

export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
      dispatch(initializedSuccess());
    });
  };
};

export const passErrorData = (errorData) => {
  return (dispatch) => {
    dispatch(anErrorHasOccurred(errorData));
  };
};

export default appReducer;
