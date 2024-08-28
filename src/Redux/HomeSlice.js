import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Get Home
export let getHome = createAsyncThunk(
  "searchSclice/getSearch",
  async () => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=`
    );
    return response.data.meals;
  }
);
// Initial Value
let initialState = { Home: [], isloading: false, isError: null };
// Slice
let homeSclice = createSlice({
  name: "search",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getHome.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(getHome.fulfilled, (state, action) => {
      state.isloading = false;
      state.Home = action.payload;
    });
    builder.addCase(getHome.rejected, (state, action) => {
      state.isloading = false;
      state.isError = action.payload;
    });
  }, 
});
//Reducer
export let home = homeSclice.reducer;
