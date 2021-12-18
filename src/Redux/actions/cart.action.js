import { cartType } from "../actionType/actionType";

export const addToCart = (payload) => ({
  type: cartType.ADD_TO_CART,
  payload: payload,
});

export const addCartWithQuantity = (payload) => ({
  type: cartType.ADD_CART_WITH_QUANTITY,
  payload: payload,
});

export const changeQuantityCart = (payload) => ({
  type: cartType.CHANGE_QUANTITY_CART,
  payload: payload,
});
