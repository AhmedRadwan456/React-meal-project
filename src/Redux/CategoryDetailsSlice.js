import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Get Category Details
export let getCategoryDetails = createAsyncThunk(
  "CategoryDetailsSclice/getCategoryDetails",
  async (name) => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
    );
    return response.data.meals.slice(0, 20);
  }
);

//Initial Value
let initialState = {
  CategoeiesDetail: [],
  isloading: false,
  isError: null,
};
//Slice
let CategoryDetailsSclice = createSlice({
  name: "CategoryDetails",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCategoryDetails.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(getCategoryDetails.fulfilled, (state, action) => {
      state.CategoeiesDetail = action.payload;
      state.isloading = false;
    });
    builder.addCase(getCategoryDetails.rejected, (state, action) => {
      state.isError = action.payload;
      state.isloading = false;
    });
  },
});

//Reducer
export let CategoryDetail = CategoryDetailsSclice.reducer;
  
