import { configureStore } from "@reduxjs/toolkit";
import { getAllMenuItemSlice } from "../feature/getMenuItemSlice";

export const store= configureStore({
    reducer:getAllMenuItemSlice.reducer,
})