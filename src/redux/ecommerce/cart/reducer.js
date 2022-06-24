import {
  ADD_TO_CART,
  DECREMENT_QTY,
  REMOVE_FROM_CART,
} from "../../../redux/actionTypes";

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cartData")) || [],
  //   cart: [],
};

// function reducer (state = initState(), action) {
//     return state
// }

// function initState () {
//     return {
//         token: localStorage.userJWT,
//         email: localStorage.userEmail,
//         id: localStorage.userId,
//         surname: localStorage.surname
//     }
// }

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: JSON.parse(localStorage.getItem("cartData")),
        // ...action.payload,
      };
    case DECREMENT_QTY:
      if (
        state.cart.findIndex((product) => product.id === action.productId) !==
        -1
      ) {
        const cart = state.cart.reduce((cartAcc, product) => {
          if (product.id === action.productId && product.qty > 1) {
            cartAcc.push({
              ...product,
              qty: product.qty - 1,
              sum: product.price * (product.qty - 1),
            }); // Decrement qty
          } else {
            cartAcc.push(product);
          }
          return cartAcc;
        }, []);

        return { ...state, cart };
      }

      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...action.product,
            qty: action.qty,
            sum: action.product.price * action.qty,
          },
        ],
      };

    case REMOVE_FROM_CART:
      return {
        cart: state.cart.filter((item) => item.id !== action.product_id.id),
      };

    default:
      return state;
  }
};
