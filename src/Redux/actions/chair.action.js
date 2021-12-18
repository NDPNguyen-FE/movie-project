import { selectChairType } from "../actionType/actionType";

export const selectChairStd = (payload) => ({
  type: selectChairType.SELECT_CHAIR_STD,
  payload: payload,
});

export const selectChairVIP = (payload) => ({
  type: selectChairType.SELECT_CHAIR_VIP,
  payload: payload,
});
