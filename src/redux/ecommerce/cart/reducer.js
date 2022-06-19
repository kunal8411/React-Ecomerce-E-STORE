import {
  ADD_TO_CART,
  DECREMENT_QTY,
  REMOVE_FROM_CART,
} from "../../../redux/actionTypes";
const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cartData")) || [],
  //   cart: [],
};

// get appi call for all the products in card for that user ->that will be my initaial state

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
      //   console.log("Initial Cart", state.cart);
      //   console.log("Product Id", action.payload.product._id);
      const productId = action.payload.product._id;
      if (state.cart.findIndex((product) => product.userData._id === productId) !== -1) {
        const cart = state.cart.reduce((cartAcc, product) => {
          console.log(" state product", product);
          if (product.userData._id === productId) {
            // increment cart quantity , update
            cartAcc.push({
              ...product,
              qty: product.qty + 1,
              sum: product.userData.price * (product.qty + 1),
            });
            
            // Increment qty
          } else {
            //post method to add new Cart data
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
            ...action.payload.product,
            qty: action.payload.qty,
            sum: action.payload.product.price * action.payload.qty,
          },
        ],
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
