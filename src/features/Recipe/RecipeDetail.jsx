import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"

const RecipeDetail = () => {

    const {state:recipe} = useLocation()

    const {recipes} = useSelector(state => state.recipes)



    return (
        <div className="container my-4">
            <h2>{recipe.name}</h2>
            <div className="card">
                <div className="row">
                    <div className="col-md-4">
                        <img src={recipe.recipeImageURL} alt={recipe.name} className="img-fluid rounded-start" style={{height: "100%"}}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">Cuisine: {recipe.cuisine}</h3>
                            <h4 className="card-sub-title">Ingredients:</h4>
                            {recipe.ingredients.join(", ")}
                            <h4 className="card-sub-title">Instructions:</h4>
                            <ol>
                                {recipe.instructions.map(step => <li key={step}>{step}</li>)}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetail