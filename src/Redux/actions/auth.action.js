import { authTypes } from "../actionType/actionType";

export const loginStart = () => ({
  type: authTypes.USER_LOGIN_START,
});

export const loginSuccess = (payload) => ({
  type: authTypes.USER_LOGIN_SUCCESS,
  payload: payload,
});

export const loginFailure = () => ({
  type: authTypes.USER_LOGIN_FAILURE,
});

export const logout = () => ({
  type: authTypes.USER_LOGOUT,
});

export const getProfileStart = () => ({
  type: authTypes.GET_USER_PROFILE_START,
});

export const getProfileSuccess = (payload) => ({
  type: authTypes.GET_USER_PROFILE_SUCCESS,
  payload: payload,
});

export const getProfileFailure = () => ({
  type: authTypes.GET_USER_PROFILE_FAILURE,
});

export const getProfileByToken = (payload) => ({
  type: authTypes.GET_USER_PROFILE_SUCCESS,
  payload: payload,
});
