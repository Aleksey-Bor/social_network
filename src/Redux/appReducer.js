import { getAuthUserData } from "./authReducer";
// Reloaded project from remote repository
//5.01.2022 will add TypeScript

const INITIALIZED_SUCCESS = "alex_samurai_network/app/INITIALIZED_SUCCESS";
const AN_ERROR_HAS_OCCURRED = "alex_samurai_network/app/AN_ERROR_HAS_OCCURRED";

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
