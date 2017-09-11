import axios from "axios";
import { FETCH_USER, CREATE_USER, AUTH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  console.log("res.data");
  console.log(res.data);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const signupUser = ({ email, password }) => async dispatch => {
  const res = await axios.post("/auth/email", { email, password });
  dispatch({ type: AUTH_USER });
  localStorage.setItem("token", res.data.token);
};

export const loginUser = ({ email, password }) => async dispatch => {
  // Submit email/password to server
  const res = await axios.post("/auth/login", { email, password });

  dispatch({ type: AUTH_USER });
  localStorage.setItem("token", res.data.token);
  // If request is good...
  // Update state to indicate user is authenticated
  // - Save JWT token
  // - Redirect to route /feature
  //If request is bad...
  // - show error to user
};
