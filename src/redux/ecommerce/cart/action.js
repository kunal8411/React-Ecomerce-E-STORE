import {
  DECREMENT_QTY,
  REMOVE_FROM_CART,
  ADD_TO_CART,
} from "../../../redux/actionTypes";
import axios from "axios";
import { ServerUrl } from "../../../constant/index";
import Cookies from "js-cookie";
const getCartItems = () => {
  let loggedInUseer = JSON.parse(Cookies.get("user"));
  axios
    .get(`${ServerUrl}/api/carts/${loggedInUseer._id}`)
    .then((res) =>
      localStorage.setItem("cartData", JSON.stringify(res.data))
    )
    .catch((err) => console.log(false));
};
export const addToCart = (product, qty) => {
  //get cart
  getCartItems();
  return {
    type: ADD_TO_CART,
    payload: { product, qty },
  };
};

export const removeFromCart = (product_id) => ({
  type: REMOVE_FROM_CART,
  product_id,
});

export const decrementQty = (productId) => ({
  type: DECREMENT_QTY,
  productId,
});
