import axios from "axios";
import {
  FETCH_USER,
  FETCH_SURVEYS,
  UNAUTH_USER,
  AUTH_USER,
  AUTH_ERROR,
  FETCH_AROBJECTS
} from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchLocalUser = ({ token }) => async dispatch => {
  const res = await axios.post("/api/fetchLocalUser", { token });
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post("/api/surveys", values);
  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get("/api/surveys");

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const fetchARObjects = () => async dispatch => {
  const res = await axios.get("/api/getARObjects");

  dispatch({ type: FETCH_AROBJECTS, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const signupUser = ({ email, password }) => async dispatch => {
  const res = await axios.post("/auth/email", { email, password });
  dispatch({ type: AUTH_USER });
  console.log("in signupUser");
  localStorage.setItem("token", res.data.token);
};

export const loginUser = ({ email, password }) => async dispatch => {
  // Submit email/password to server
  //const res = await axios.post("/auth/login", { email, password });

  axios
    .post("/auth/login", { email, password })
    .then(res => {
      // If request is good...
      // - Update state to indicate user is authenticated
      dispatch({ type: AUTH_USER });
      // - Save the JWT token
      localStorage.setItem("token", res.data.token);
      // - redirect to the route '/feature'
      res.redirect("/surveys");
    })
    .catch(() => {
      // If request is bad...
      // - Show an error to the user
      dispatch(authError("Bad Login Info"));
    });
};

export const logoutUser = () => async dispatch => {
  localStorage.removeItem("token");
  const res = await axios.get("/api/logout");
  return { type: UNAUTH_USER };
};

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
