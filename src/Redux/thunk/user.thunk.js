import userManagerApi from "../../API/userMangerApi";

import * as action from "../actions/user.action";

export const createUser = (params) => (dispatch) => {
  dispatch(action.createUserStart());

  userManagerApi
    .createUser(params)
    .then((user) => dispatch(action.createUserSuccess(user)))
    .catch((err) => dispatch(action.createUserFailure(err)));
};

export const updateCustomers = (params) => (dispatch) => {
  dispatch(action.updateCustomer());

  userManagerApi
    .updateUser(params)
    .then((payload) => {
      dispatch(action.updateCustomerSuccess(payload));
    })
    .catch((err) => dispatch(action.updateCustomerFailure()));
};
