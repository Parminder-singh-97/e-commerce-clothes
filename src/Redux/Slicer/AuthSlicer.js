import { createSlice } from "@reduxjs/toolkit";

const AuthSlicer = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false || JSON.parse(localStorage.getItem("isLoggedIn"))
  },
  reducers: {
    login: (state,action) => {
      state.isAuthenticated = JSON.parse(action.payload)
      console.log(state.isAuthenticated)
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.isAuthenticated = localStorage.removeItem("isLoggedIn")
      state.isAuthenticated = localStorage.removeItem("cartItems")
      state.isAuthenticated = localStorage.removeItem("uid")
      console.log("Logout", state.isAuthenticated);
    },
  },
});
export const { login, logout } = AuthSlicer.actions;

export default AuthSlicer.reducer;
