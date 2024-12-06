import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"

export const fetchRecipes = createAsyncThunk("/recipes/fetchRecipes", async () => {
    const response = await axios.get("http://localhost:8000/recipes")

    return response.data
})

export const recipeSlice = createSlice({
    name: "recipe",
    initialState: {
        recipes: [],
        status: "idle",
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRecipes.pending, (state) => {
            state.status = "loading"
        })
        builder.addCase(fetchRecipes.fulfilled, (state, action) => {
            state.status = "success"
            state.recipes = action.payload
        })
        builder.addCase(fetchRecipes.rejected, (state, action) => {
            state.status = "error"
            state.error = action.payload
        })
    },
    reducers: {
        addRecipe: (state, action) => {
            state.recipes = [...state.recipes, action.payload]
        },
        deleteRecipe: (state, action) => {
            state.recipes = state.recipes.filter(recipe => recipe._id != action.payload)
        }
    }
})

const {addRecipe, deleteRecipe} = recipeSlice.actions

export const addRecipeAsync = (newRecipe) => async (dispatch) => {
    try {
        const response = await fetch("http://localhost:8000/recipes", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newRecipe)
        })

        if(!response.ok) {
            console.log("error occured while adding recipe")
        } else {
            const data = await response.json()
        dispatch(addRecipe(data.recipe))
        }

        
    } catch (error) {
        console.log(error)
    }
}

export const deleteRecipeAsync = (recipeId) => async (dispatch) => {
    try {
        const response = await fetch(`http://localhost:8000/recipes/deleteRecipe/${recipeId}`, {
            method: "DELETE"
        })

        const data = await response.json()

        console.log(data)

        if(!response.ok) {
            console.log("Error occured while deleting recipe")
        } else {
            dispatch(deleteRecipe(recipeId))
        }

    } catch (error) {
        console.log(error)
    }
} 

