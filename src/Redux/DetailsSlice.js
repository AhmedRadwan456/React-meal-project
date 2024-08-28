import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Get Details
export let getDetails = createAsyncThunk(
  "DetailsSclice/getDetails",
  async (id) => {
    
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    return response.data.meals[0];
  }
);
//Initial Value
let initialState = { detail: [], isloading: false, isError: null };
//Slice
let DetailsSclice = createSlice({
  name: "Area",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.detail = action.payload;
      state.isloading = false;
    });
    builder.addCase(getDetails.rejected, (state, action) => {
      state.isError = action.payload;
      state.isloading = false;
    });
  },
});

//Reducer
export let Detail = DetailsSclice.reducer;
