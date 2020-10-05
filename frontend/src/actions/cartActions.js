import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";

// getState -> get current global state
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  // save cart with all items to localstorage
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
