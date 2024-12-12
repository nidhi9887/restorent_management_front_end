import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllMenuItemApi } from "../service/CustomerService";
export const getAllMenuItem = createAsyncThunk(
  "customer/getAllMenuItem", async ()=>{
    return  getAllMenuItemApi();
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
      state.loading = true;
    });
  },
});
