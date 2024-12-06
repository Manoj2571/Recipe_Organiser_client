import { useState } from "react"
import { useDispatch } from "react-redux"
import { addRecipeAsync } from "./recipeSlice"

const RecipeForm = () => {
    const dispatch = useDispatch()

    const [newRecipe, setNewRecipe] = useState({
        name: "",
        cuisine: "",
        recipeImageURL: "",
        ingredients: [],
        instructions: []
    })

    console.log(newRecipe)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(addRecipeAsync(newRecipe))
        setNewRecipe({
            name: "",
            cuisine: "",
            recipeImageURL: "",
            ingredients: [],
            instructions: []
        })
    }


    return (
        <div className="container mb-4">
            <h2 className="mt-4">Add Recipe</h2>
            <form onSubmit={submitHandler}>
                <label htmlFor="recipeNameInput">Name:</label>
                <input type="text" id="recipeNameInput" className="form-control w-25 mb-3" value={newRecipe.name} onChange={(e) => setNewRecipe({...newRecipe, name: e.target.value})} required/>
                <label htmlFor="cuisineTypeInput">Cuisine Type:</label>
                <input type="text" id="cuisineTypeInput" className="form-control w-25 mb-3" value={newRecipe.cuisine} onChange={(e) => setNewRecipe({...newRecipe, cuisine: e.target.value})} required/>
                <label htmlFor="recipeImageURL">Image Link:</label>
                <input type="text" id="recipeImageURL" className="form-control w-25 mb-3" value={newRecipe.recipeImageURL} onChange={(e) => setNewRecipe({...newRecipe, recipeImageURL: e.target.value})} required/>
                <label htmlFor="Ingredients">Ingredients:</label>
                <textarea id="Ingredients" className="form-control w-25 mb-3" value={newRecipe.ingredients.join(", ")} onChange={(e) => setNewRecipe({...newRecipe, ingredients: e.target.value.split(", ")})} required></textarea>
                <label htmlFor="Instructions">Instructions:</label>
                <textarea id="Instructions" className="form-control w-25 mb-3" value={newRecipe.instructions.join("\n")} onChange={(e) => setNewRecipe({...newRecipe, instructions: e.target.value.split("\n")})} required></textarea>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default RecipeForm
