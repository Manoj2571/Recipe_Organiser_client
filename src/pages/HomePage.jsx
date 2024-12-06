import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { deleteRecipeAsync, fetchRecipes } from "../features/Recipe/recipeSlice"


const HomePage = () => {
    const dispatch = useDispatch()
    const {recipes, status, error} = useSelector(state => state.recipes)

    const [searchTerm, setSearchTerm] = useState("")


    const filteredRecipes = searchTerm ? recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase())) : recipes

    const recipeDeleteHandler = (e) => {
        e.preventDefault()
        dispatch(deleteRecipeAsync(e.target.value))
    }


    useEffect(() => {
        dispatch(fetchRecipes())
    }, [])

    return (
        <div className="container mb-5">
            <input type="search" placeholder="Search by recipe name..." className="form-control w-50 my-4" onChange={(e) => setSearchTerm(e.target.value)}/>
            <h2>All Recipes:</h2>
            {status =="loading" && <p>Loading...</p>}
            {status == "success" &&<div className="row">
                {filteredRecipes.length > 0 ? filteredRecipes.map(recipe => <div className="col-md-3" key={recipe._id}>
                    <div className="card">
                        <img className="card-img-top" alt={recipe.name} src={recipe.recipeImageURL}/>
                        <div className="card-body">
                            <h3 className="card-title">{recipe.name}</h3>
                            <p className="card-text"><strong>Cuisine Type:</strong> {recipe.cuisine}</p>
                            <p className="card-text"><strong>Ingredients:</strong> <Link to={`/recipeDetail/${recipe._id}`} state={recipe}>See Recipe {">"}</Link></p>
                            <p className="card-text"><strong>Instructions:</strong> <Link to={`/recipeDetail/${recipe._id}`} state={recipe}>See Recipe {">"}</Link></p>
                            <button className="btn btn-danger" onClick={recipeDeleteHandler} value={recipe._id}>Delete</button>
                        </div>
                    </div>
                </div>) : <p>No Results found.</p>}
            </div>}
            {status == "error" && <p>Recipes not found.</p>}
        </div>
    )
}

export default HomePage