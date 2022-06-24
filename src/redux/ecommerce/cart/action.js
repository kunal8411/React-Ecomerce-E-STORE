import {
  DECREMENT_QTY,
  REMOVE_FROM_CART,
  ADD_TO_CART,
} from "../../../redux/actionTypes";

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload: payload ,
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
