import { useRecipe } from "../store/useRecipe";
import "../styles/ingredient.css"

export const Ingredients = () => {
  const recipe = useRecipe((state: any) => state.recipe);

  return <>
    <div className="ingredients-container">
      {recipe.length === 0 ? (
        <h2>Try to search recipes</h2>
      ) : (
        <div className="recipe">
          <div className="left">
            <img src={recipe.image_url} alt={recipe.title} />
            <p>{recipe.publisher}</p>
          </div>
          <div className="right">
            <h3>{recipe.title}</h3>
            <h3>Ingredients</h3>         
            <ul>
              {recipe.ingredients.map((ingredient: any, index: number) => (
                <div key={index} className="ingredients">
                  <li>{ingredient.quantity} {ingredient.unit} {ingredient.description}</li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  </>
}