import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../util";

const initialState = {
  error: null,
  loading: false,
  message: null,
  regRedirectPath: null,
  regData: {},
};

const regStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const saveRegData = (state, action) => {
  const regData = {
    email: action.email,
    practiceWebUrl: action.practiceWebUrl,
    practiceName: action.practiceName,
    firstname: action.firstname,
    lastname: action.lastname,
    title: action.title,
  };
  return updateObject(state, { regData });
};

const regSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false,
    message: action.message,
    regRedirectPath: "/confirmation/email",
  });
};

const regReset = (state, action) => {
  console.log("reseting this");
  return updateObject(state, {
    error: null,
    loading: false,
    message: null,
    regRedirectPath: null,
  });
};

const regFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REG_START:
      return regStart(state, action);
    case actionTypes.REG_SUCCESS:
      return regSuccess(state, action);
    case actionTypes.SAVE_REG_DATA:
      return saveRegData(state, action);
    case actionTypes.SET_REG_REDIRECT_PATH:
      return setRegRedirectPath(state, action);
    case actionTypes.REG_FAILURE:
      return regFail(state, action);
    case actionTypes.REG_RESET:
      return regReset(state, action);
    default:
      return state;
  }
};

const setRegRedirectPath = (state, action) => {
  return updateObject(state, { regRedirectPath: action.path });
};

export default reducer;
