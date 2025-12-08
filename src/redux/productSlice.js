//const { createAsyncThunk } = require("@reduxjs/toolkit");
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts= createAsyncThunk('product', async()=>{
    const resp= await fetch('https://dummyjson.com/products');
    console.log("this is response" ,resp)
 
    const jsonResp= await resp.json();
    return jsonResp.products
    //return resp.json().products;
})

const initialState={
    items:[],
    status:undefined,
    error:null
}
const productsSlice=createSlice({
    name:'productsSlice',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.status='succeeded '
            state.items=action.payload
        })
    }
})

export default productsSlice.reducer;