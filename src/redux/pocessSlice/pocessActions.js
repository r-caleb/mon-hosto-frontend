import request from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllPocess = createAsyncThunk("pocess/getAll", async () => {
  try {
    // configure header's Content-Type as JSON
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await request(`/all-pocess`, config);
    return data;
  } catch (error) {
    return error;
  }
});

export const getOnePocess = createAsyncThunk("pocess/getOne", async (id) => {
  try {
    // configure header's Content-Type as JSON
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await request(`/a-pocess/${id}`, config);
    return data;
  } catch (error) {
    return error;
  }
});
