import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import authReducer from "./authReducer";
import createUserReducer from "./createUserReducer";
import surveysReducer from "./surveysReducer";
import ARObjectsReducer from "./ARObjectsReducer";

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  createUser: createUserReducer,
  surveys: surveysReducer,
  arobjects: ARObjectsReducer
});

export default rootReducer;
