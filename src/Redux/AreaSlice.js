import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//Get Area
export let getArea = createAsyncThunk("AreaSclice/getArea", async () => {
  const response = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  return response.data.meals;
});

//initial Value
let initialState = {
  Area: [],
  isloading: false,
  isError: null,
};

//slice
let AreaSclice = createSlice({
  name: "Area",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getArea.pending, (state) => {
      state.isloading = true;
    });
    builder.addCase(getArea.fulfilled, (state, action) => {
      state.Area = action.payload;
      state.isloading = false;
    });
    builder.addCase(getArea.rejected, (state, action) => {
      state.isError = action.payload;
      state.isloading = false;
    });
  },
  
});
//Reducer
export let Area = AreaSclice.reducer;
