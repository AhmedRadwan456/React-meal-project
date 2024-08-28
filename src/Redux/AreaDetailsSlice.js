import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//Get Area Details
export let getAreaDetails = createAsyncThunk(
  "AreaDetailsSclice/getAreaDetails",
  async (name) => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`
    );
    return response.data.meals.slice(0, 20);
  }
);


//Initial Value
let initialState = {
  productDetail: [],
  isloading: false,
  isError: null,
};
//Slice
let AreaDetailsSclice = createSlice({
  name: "AreaDetails",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAreaDetails.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(getAreaDetails.fulfilled, (state, action) => {
      state.productDetail = action.payload;
      state.isloading = false;
    });
    builder.addCase(getAreaDetails.rejected, (state, action) => {
      state.isError = action.payload;
      state.isloading = false;
    });
  },
});

//Reducer
export let AreaDetail = AreaDetailsSclice.reducer;
  
