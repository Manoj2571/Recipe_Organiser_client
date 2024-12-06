import { configureStore } from "@reduxjs/toolkit";
import { recipeSlice } from "./features/Recipe/recipeSlice";

const store = configureStore({
    reducer: {
        recipes: recipeSlice.reducer
    }
})

export default store