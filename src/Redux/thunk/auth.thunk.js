import login from "../../API/authApi";
import * as actions from "../actions/auth.action";

export const actionLogin = (params) => (dispatch) => {
  dispatch(actions.loginStart());

  login
    .userLogin(params)
    .then((payload) => {
      dispatch(actions.loginSuccess(payload));
    })
    .catch(() => {
      dispatch(actions.loginFailure());
    });
};
