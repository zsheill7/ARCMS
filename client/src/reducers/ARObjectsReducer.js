import { FETCH_AROBJECTS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_AROBJECTS:
      return action.payload;
    default:
      return state;
  }
}
