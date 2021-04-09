import { types } from "../../constants/auth";

export const loginAction = (payload) => {
  return {
    type: types.LOGIN_ACTION,
    payload: payload,
  };
};
export const loginActionSuccess = (response) => {
  return {
    type: types.LOGIN_ACTION_SUCCESS,
    payload: response,
  };
};
export const loginActionFailed = (error) => {
  return {
    type: types.LOGIN_ACTION_FAILED,
    payload: error,
  };
};

export const uploadProfileAction = () => {
  return {
    type: types.UPLOAD_PROFILE_ACTION,
  };
};
