import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice/authSlice";
import hospitalReducer from "./hospitalSlice/hospitalSlice";
import serviceReducer from "./serviceSlice/serviceSlice";
import pocessReducer from "./pocessSlice/pocessSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    hospital: hospitalReducer,
    service: serviceReducer,
    pocess: pocessReducer,
  },
});

export default store;
