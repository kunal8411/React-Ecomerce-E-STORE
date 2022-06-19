import { ADD_NEW_USER } from "../actionTypes";

const initial_state = {
  loggedInUser: null,
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case ADD_NEW_USER:
      console.log("hello I am current USER Reducer",action.payload.data);
      return { ...state, loggedInUser: action.payload.data };

    default:
      return state;
  }
};
