import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addMenuItemAPi } from "../service/EmployeeService";

export const addMenuItem= createAsyncThunk('addMenuItem/addMenuItem', async(queryData)=>{
   return  addMenuItemAPi(queryData);

})
 

const initialState={
    loading:false,
    massage:[],
    error:[],

}
export const addMenuItemSlice=createSlice({
    name:'addMenuItem',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(addMenuItem.pending,(state)=>{
            state.loading=true;
        });
        builder.addCase(addMenuItem.fulfilled,(state,action)=>{
            state.loading=false;
            state.massage=action.payload;
        });
        builder.addCase(addMenuItem.rejected,(state)=>{
            state.loading=false;
        });

    }



})