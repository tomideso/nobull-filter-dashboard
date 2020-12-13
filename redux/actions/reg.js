import axios from "axios";
import * as actionTypes from "./actionTypes";
import { setCookie } from "../cookie-helper";

export const saveRegData = (regData) => {
  return {
    type: actionTypes.SAVE_REG_DATA,
    email: regData.email,
    practiceWebUrl: regData.practiceWebUrl,
    practiceName: regData.practiceName,
    firstname: regData.firstname,
    lastname: regData.lastname,
    title: regData.title,
  };
};

export const regStart = () => {
  return {
    type: actionTypes.REG_START,
  };
};

export const register = (
  { email, password, practiceWebUrl, practiceName, firstname, lastname, title },
  type = "hospital"
) => {
  return (dispatch) => {
    const authData = {
      email,
      password,
      practiceWebUrl,
      practiceName,
      firstname,
      lastname,
      title,
    };

    dispatch(saveRegData(authData));
    dispatch(regStart());

    const url =
      type == "patient"
        ? ""
        : "http://localhost:8000/v1/account/register-doctor";

    axios
      .post(url, authData)
      .then((response) => {
        dispatch(regSuccess(response.data.message));
      })
      .catch((err) => {
        dispatch(regFail(err.response.data.message));
      });
  };
};

export const setRegRedirectPath = (path) => {
  return {
    type: actionTypes.SET_REG_REDIRECT_PATH,
    path: path,
  };
};

export const regFail = (error) => {
  return {
    type: actionTypes.REG_FAILURE,
    error: error,
  };
};

export const regSuccess = (message) => {
  return {
    type: actionTypes.REG_SUCCESS,
    message,
  };
};

export const resetReg = () => {
  return {
    type: actionTypes.REG_RESET,
  };
};
