import { CART_ADD_ITEM } from "../constants/cartConstance";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          // update the item on the state because it alerady exists in the state
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        // if the item does not exist in the global state just push it to the array
        return {
          ...state,
          cartItem: [...state.cartItems, item],
        };
      }

    default:
      return state;
  }
};
