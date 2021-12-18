import { userType } from "../actionType/actionType";

export const createUserStart = () => ({
  type: userType.CREAT_USER_START,
});

export const createUserSuccess = (payload) => ({
  type: userType.CREAT_USER_SUCCESS,
  payload: payload,
});

export const createUserFailure = () => ({
  type: userType.CREAT_USER_FAILURE,
});

export const updateCustomer = () => ({
  type: userType.UPDATE_USER_START,
});

export const updateCustomerSuccess = (customer) => ({
  type: userType.UPDATE_USER_SUCCESS,
  payload: customer,
});

export const updateCustomerFailure = () => ({
  type: userType.UPDATE_USER_FAILURE,
});
