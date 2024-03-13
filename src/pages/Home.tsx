import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRecipe } from "../store/useRecipe";
import "../styles/Home.css";
import { useFavorite } from "../store/useFavorite";

export const Home = () => {
  const recipes = useRecipe((state: any) => state.recipes)
  const {addFavorite}:any = useFavorite()
  
  const { setId, getRecipe } = useRecipe();

  const handleCLick = (id: string) => {
    setId(id);

    async function fetchRecipe() {
      try {
        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
        const data = await response.json();
        getRecipe(data?.data.recipe);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRecipe();
  };


  return (
    <>
      <h2>Bienvenue sur la page d'accueil</h2>

      {recipes.length === 0 ? (
        <h2>Try to search recipes</h2>
      ) : (
        <div className="recipes">
          {recipes.map((recipe: any) => (
            <div key={recipe.id} className="recipe">
              <FaHeart className="heart" onClick={() => addFavorite(recipe)}/>
              <img src={recipe.image_url} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <Link to="/Ingredients" className="btn"
                onClick={() => handleCLick(recipe.id)}
              >Recipes Details</Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}