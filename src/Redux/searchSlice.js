import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Get Searcch By Name
export let getSearchByName = createAsyncThunk(
  "searchtSclice/getSearch",
  async (name) => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    return response.data.meals;
  }
);
//Get Searcch By First Name
export let getSearchByFirstName = createAsyncThunk(
  "searchtSclice/getSearch",
  async (name) => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${name}`
    );
    return response.data.meals;
  }
);

//Initial Value
let initialState = { SearchByName: [], SearchByFirstName: [],isloading: false, isError: null };
//Slice
let searchSclice = createSlice({
  name: "search",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getSearchByName.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(getSearchByName.fulfilled, (state, action) => {
      state.isloading = false;
      state.SearchByName = action.payload;
    });
    builder.addCase(getSearchByName.rejected, (state, action) => {
      state.isloading = false;
      state.isError = action.payload;
    });
  }, 
  extraReducers: (builder) => {
    builder.addCase(getSearchByFirstName.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(getSearchByFirstName.fulfilled, (state, action) => {
      state.isloading = false;
      state.SearchByFirstName = action.payload;
    });
    builder.addCase(getSearchByFirstName.rejected, (state, action) => {
      state.isloading = false;
      state.isError = action.payload;
    });
  }, 
});
//Reducer
export let searchByName = searchSclice.reducer;
