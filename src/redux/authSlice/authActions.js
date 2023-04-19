import request from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ phoneNumber, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await request.post(
        `/login`,
        { phoneNumber, password },
        config
      );
      sessionStorage.setItem("user", JSON.stringify(data));
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//{...userRegister, ...time, ...location, da y}
export const registerUser = createAsyncThunk(
  "auth/register",
  async (
    { firstname, lastname, phoneNumber, email, password, picture },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await request.post(
        "/signup",
        {
          firstname,
          lastname,
          phoneNumber,
          email,
          password,
          picture,
        },
        config
      );

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        console.log(error);
        return rejectWithValue(error.message);
      }
    }
  }
);

