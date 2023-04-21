import { createSlice } from "@reduxjs/toolkit";
import { getAllService } from "./serviceActions";

const initialState = {
  loading: false,
  serviceInfo: null,
  error: null,
  success: false,
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get all hospitals
    builder.addCase(getAllService.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllService.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.serviceInfo = payload;
      state.success = true;
    });
    builder.addCase(getAllService.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export default serviceSlice.reducer;
