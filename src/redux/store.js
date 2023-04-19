import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice/authSlice";
import hospitalReducer from "./hospitalSlice/hospitalSlice";

const store = configureStore({
  reducer: { auth: authReducer, hospital: hospitalReducer },
});

export default store;
