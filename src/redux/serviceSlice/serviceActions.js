import request from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllService = createAsyncThunk("service/getAll", async () => {
  try {
    // configure header's Content-Type as JSON
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await request(`/all-services`, config);
    return data;
  } catch (error) {
    return error;
  }
});
