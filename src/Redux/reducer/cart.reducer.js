import { cartType } from "../actionType/actionType";

const initialState = {
  cart: [],
  totalCart: 0,
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case cartType.ADD_TO_CART: {
      const product = payload;

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      const indexProduct = cart.findIndex((cart) => cart.key === product.key);

      if (indexProduct !== -1) {
        cart[indexProduct].quantity = product.quantity;
      } else {
        cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      return {
        totalCart: cart.length,
        cart: cart,
      };
    }

    // case cartType.CHANGE_QUANTITY_CART: {
    //   const cart = JSON.parse(localStorage.getItem("cart")) || [];

    //   const indexChange = cart.findIndex((cart) => cart.key === payload.key);

    //   console.log(payload);

    //   if (indexChange !== -1) {
    //     cart[indexChange].quantity += 1;
    //   } else {
    //     cart.push({ ...payload, quantity: 1 });
    //   }
    //   cart[indexChange].quantity = payload.quantity;

    //   localStorage.setItem("cart", JSON.stringify(cart));

    //   return {
    //     ...state,
    //     cart: cart,
    //   };
    // }

    default:
      return state;
  }
};

export default cartReducer;
