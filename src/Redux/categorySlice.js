import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Get Categories
export let getCategories = createAsyncThunk(
  "categoriesSclice/getCategories",
  async () => {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    return response.data.categories;
  }
);
 
//Initial Value
let initialState = { categories: [], isloading: false, isError: null };
//Slice
let categoriesSclice = createSlice({
  name: "categoriesSclice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.isloading = false;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.isError = action.payload;
      state.isloading = false;
    });
  },
});
//Reducer
export let categories = categoriesSclice.reducer;
