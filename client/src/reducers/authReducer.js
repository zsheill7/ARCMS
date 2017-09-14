import { FETCH_USER, AUTH_ERROR } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_USER:
      console.log(action);
      return action.payload || false;
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
