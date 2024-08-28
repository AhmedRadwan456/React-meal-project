import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Get Ingrediant
export let getIngredient = createAsyncThunk(
  "ingredientSclice/getIngredient",
  async () => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=`
    );
    return response.data.meals.slice(0, 25);
  }
);

// Intial Value

let initialState = { Ingredient: [], isloading: false, isError: null };

// Slice
let ingredientSclice = createSlice({
  name: "ingredient",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getIngredient.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(getIngredient.fulfilled, (state, action) => {
      state.isloading = false;
      state.Ingredient = action.payload;
    });
    builder.addCase(getIngredient.rejected, (state, action) => {
      state.isloading = false;
      state.isError = action.payload;
    });
  },
});
//Reducer
export let ingredient = ingredientSclice.reducer;
