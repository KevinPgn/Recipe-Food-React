import { useFavorite } from "../store/useFavorite";
import { FaHeartBroken } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRecipe } from "../store/useRecipe";

export const Favorites = () => {
  const favorite = useFavorite((state: any) => state.favorite);
  const {removeFavorite}:any = useFavorite()
  
  console.log(favorite);
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


  return <>
    <div className="recipes">
          {favorite.map((favo: any) => (
            <div key={favo.id} className="recipe">
              <FaHeartBroken className="heart" onClick={() => removeFavorite(favo.id)}/>
              <img src={favo.image_url} alt={favo.title} />
              <h3>{favo.title}</h3>
              <Link to="/Ingredients" className="btn"
                onClick={() => handleCLick(favo.id)}
              >Recipes Details</Link>
            </div>
          ))}
        </div>
  </>
}