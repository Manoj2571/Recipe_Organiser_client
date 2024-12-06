import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import HomePage from './pages/HomePage';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Header from './components/Header';
import RecipeForm from './features/Recipe/RecipeForm';
import RecipeDetail from './features/Recipe/RecipeDetail';

function App() {
  return (
    <div>
      
      <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/addRecipe' element={<RecipeForm />} />
        <Route path='/recipeDetail/:recipeId' element={<RecipeDetail />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
