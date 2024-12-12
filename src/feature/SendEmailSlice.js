import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { sendOtpApi } from "../service/SignupService"

export const sendMail= createAsyncThunk('send/sendMail', async(queryData)=>{
   return  sendOtpApi(queryData);

})
 

const initialState={
    loading:false,
    massage:[],
    error:[],

}
export const SendMailSlice=createSlice({
    name:'send',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(sendMail.pending,(state)=>{
            state.loading=true;
        });
        builder.addCase(sendMail.fulfilled,(state,action)=>{
            state.loading=false;
            state.massage=action.payload;
        });
        builder.addCase(sendMail.rejected,(state)=>{
            state.loading=false;
        });

    }



})