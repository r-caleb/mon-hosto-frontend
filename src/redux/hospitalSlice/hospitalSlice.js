import { createSlice } from "@reduxjs/toolkit";
import { getAllhosto, getOnehosto } from "./hospitalActions";

const initialState = {
  loading: false,
  hospitalInfo: null,
  oneHospitalInfo: null,
  error: null,
  success: false,
};

const hospitalSlice = createSlice({
  name: "hospital",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get all hospitals
    builder.addCase(getAllhosto.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllhosto.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.hospitalInfo = payload;
      state.success = true;
    });
    builder.addCase(getAllhosto.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    //get one hospital
    builder.addCase(getOnehosto.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getOnehosto.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.oneHospitalInfo = payload;
      state.success = true;
    });
    builder.addCase(getOnehosto.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    /*  // register user
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true; // registration successful
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });*/
  },
});

export default hospitalSlice.reducer;
