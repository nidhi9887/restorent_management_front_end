import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllMenuItem = createAsyncThunk(
  "customer/getAllMenuItem",
  async () => {
    return  axios.get('http://localhost:8080/api/getAllMenuItems');
  }
);
const initialState = {
  error: "",
  loading: false,
  data: [],
};
export const getAllMenuItemSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllMenuItem.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllMenuItem.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getAllMenuItem.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
  },
});
