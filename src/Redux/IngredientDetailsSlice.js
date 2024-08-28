import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Get Ingrediant Details
export let getIngredientDetails = createAsyncThunk(
  "ingredientSclice/getIngredient",
  async (name) => {
    const response = await axios.get(
     `https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`
    );
    return response.data.meals;
  }
);
//Initial Value
let initialState = { IngredientDetails: [], isloading: false, isError: null };

//Slice
let ingredientDetailsSclice = createSlice({
  name: "ingredient",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getIngredientDetails.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(getIngredientDetails.fulfilled, (state, action) => {
      state.isloading = false;
      state.IngredientDetails = action.payload;
    });
    builder.addCase(getIngredientDetails.rejected, (state, action) => {
      state.isloading = false;
      state.isError = action.payload;
    });
  },
});
//Reducer
export let ingredientDetail = ingredientDetailsSclice.reducer;
