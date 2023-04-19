import request from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllhosto = createAsyncThunk("hospital/getAll", async () => {
  try {
    // configure header's Content-Type as JSON
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await request(`/all-hospitals`, config);
    return data;
  } catch (error) {
    return error;
  }
});

export const getOnehosto = createAsyncThunk("hospital/getOne", async (id) => {
  try {
    // configure header's Content-Type as JSON
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await request(`/a-hospitals/${id}`, config);
    return data;
  } catch (error) {
    return error;
  }
});
//{...userRegister, ...time, ...location, da y}
/* export const registerUser = createAsyncThunk(
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
 */
