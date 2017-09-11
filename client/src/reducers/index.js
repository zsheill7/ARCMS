import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import authReducer from "./authReducer";
import createUserReducer from "./createUserReducer";

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  createUser: createUserReducer
});

export default rootReducer;
