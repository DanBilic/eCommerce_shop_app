import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";

// getState -> get current global state
export const addToCart = (id, qty) => (dispatch, getState) => {
    const {data} = await axios.get(`/api/products/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload:{
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    // save cart with all items to localstorage
    localstorage.setItem('cartItems', JSON.stringyfy(getState().cart.cartItems))
};
