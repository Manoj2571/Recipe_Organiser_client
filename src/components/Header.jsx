import { Link } from "react-router-dom"


const Header = () => {

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link className="navbar-brand" to="/">Recipe Organiser</Link>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle Navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link to="/" className="nav-link text-primary">Recipes</Link></li>
                        <li className="nav-item"><Link to="/addRecipe" className="nav-link text-primary">Add Recipe</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Header