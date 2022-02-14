import { getAuthUserData } from "./authReducer";
// Reloaded project from remote repository
//5.01.2022 will add TypeScript

const INITIALIZED_SUCCESS = "alex_samurai_network/app/INITIALIZED_SUCCESS";
const AN_ERROR_HAS_OCCURRED = "alex_samurai_network/app/AN_ERROR_HAS_OCCURRED";

export type InitialStateType = {
  initialized: boolean;
  errorData: any;
};

let initialState: InitialStateType = {
  initialized: false,
  errorData: null,
};

const appReducer = (state = initialState, action: any): InitialStateType => {
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

type InitializedSuccessActionType = { type: typeof INITIALIZED_SUCCESS };

export const initializedSuccess = (): InitializedSuccessActionType => ({
  type: INITIALIZED_SUCCESS,
});

type AnErrorHasOccurredActionType = {
  type: typeof AN_ERROR_HAS_OCCURRED;
  errorData: any;
};

export const anErrorHasOccurred = (
  errorData: any
): AnErrorHasOccurredActionType => ({
  type: AN_ERROR_HAS_OCCURRED,
  errorData,
});

export const initializeApp = () => {
  return (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
      dispatch(initializedSuccess());
    });
  };
};

export const passErrorData = (errorData: any) => {
  return (dispatch: any) => {
    dispatch(anErrorHasOccurred(errorData)); //Еут если приходит, например, ошибка 403 крашится приложение. Реакт не хочет брать чилдом объект
  };
};

export default appReducer;
