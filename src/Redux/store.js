import { configureStore } from "@reduxjs/toolkit";
import { categories } from "./categorySlice";
import { Area } from "./AreaSlice";
import { ingredient } from "./IngredientSlice";
import { home } from "./HomeSlice";
import { searchByName } from "./searchSlice";
import { Detail } from "./DetailsSlice";
import { AreaDetail } from "./AreaDetailsSlice";
import { ingredientDetail } from "./IngredientDetailsSlice";
import { CategoryDetail } from "./CategoryDetailsSlice";

export let store = configureStore({
  reducer: {
    categories: categories,
    Area: Area,
    ingredient: ingredient,
    Home:home,
    searchByName: searchByName,
    Details: Detail,
    AreaDetails: AreaDetail,
    IngredientDetail: ingredientDetail,
    CategoryDetail: CategoryDetail,
  },
});
