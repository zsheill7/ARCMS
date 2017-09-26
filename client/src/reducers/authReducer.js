import {
  FETCH_USER,
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case AUTH_USER:
      return true;
    case FETCH_USER:
      console.log(action);
      return action.payload || false;
    case UNAUTH_USER:
      return false;
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
