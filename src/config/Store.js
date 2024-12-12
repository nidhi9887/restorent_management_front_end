import { configureStore } from "@reduxjs/toolkit";
import { getAllMenuItemSlice } from "../feature/getMenuItemSlice";
import { SendMailSlice } from "../feature/SendEmailSlice";
import { addMenuItemSlice } from "../feature/addMenuItemSlice";

export const store = configureStore({

  reducer:{getAllMenuItemSlice:getAllMenuItemSlice.reducer,
    SendMailSlice:SendMailSlice.reducer,
    addMenuItemSlice:addMenuItemSlice.reducer,
  }

});
