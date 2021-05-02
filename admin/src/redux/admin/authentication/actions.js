import {
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAILURE,
  ADMIN_LOGOUT_SUCCESS,
  ADMIN_SIGNUP_REQUEST,
  ADMIN_SIGNUP_SUCCESS,
  ADMIN_SIGNUP_FAILURE,
} from "./types";
import Axios from "axios";

// ADMIN LOGIN ACTION
export const adminLoginAction = ({ email, password }) => (dispatch) => {
  dispatch({ type: ADMIN_LOGIN_REQUEST });

  Axios.post("/admin/signin", {
    email: email,
    password: password,
  })
    .then((res) => {
      const { token, user } = res.data;
      dispatch({ type: ADMIN_LOGIN_SUCCESS, token: token, user: user });
      localStorage.setItem("token", token);
      localStorage.setItem("userInfo", JSON.stringify(user));
    })
    .catch((error) => {
      console.log(error.response.data);
      dispatch({
        type: ADMIN_LOGIN_FAILURE,
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    });
};

// ADMIN LOGOUT ACTION
export const adminLogoutAction = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("token");
  dispatch({ type: ADMIN_LOGOUT_SUCCESS });
};

// ADMIN SIGNUP ACTION
export const adminSignupAction = (user) => (dispatch) => {
  dispatch({ type: ADMIN_SIGNUP_REQUEST });

  Axios.post("/admin/signup", user)
    .then((res) => {
      dispatch({ type: ADMIN_SIGNUP_SUCCESS, payload : res.data.message });
    })
    .catch((error) => {
      dispatch({
        type: ADMIN_SIGNUP_FAILURE,
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    });
};
