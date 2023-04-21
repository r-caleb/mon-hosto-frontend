import { createSlice } from "@reduxjs/toolkit";
import { getAllPocess, getOnePocess } from "./pocessActions";

const initialState = {
  loading: false,
  pocessInfo: null,
  onePocessInfo: null,
  error: null,
  success: false,
};

const pocessSlice = createSlice({
  name: "pocess",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get all hospitals
    builder.addCase(getAllPocess.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllPocess.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.pocessInfo = payload;
      state.success = true;
    });
    builder.addCase(getAllPocess.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    //get one hospital
    builder.addCase(getOnePocess.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getOnePocess.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.onePocessInfo = payload;
      state.success = true;
    });
    builder.addCase(getOnePocess.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export default pocessSlice.reducer;
