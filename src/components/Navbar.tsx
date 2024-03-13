import { Link } from "react-router-dom";
import { useRecipe } from "../store/useRecipe";
import "../styles/Navbar.css";

export const Navbar = () => {
  const search = useRecipe((state: any) => state.search);
  const {setSearch, setRecipes} = useRecipe()

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("1");
    
    async function fetchRecipes() {
      if(search !== ""){
        try{
          const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`);
         
          const data = await response.json();
          setRecipes(data?.data.recipes)
        } catch (error) {
          console.error(error);
        }
      } else {
        try{
          const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes`);
         
          const data = await response.json();
          setRecipes(data?.data.recipes)
        } catch (error) {
          console.error(error);
        }
      }
    }
    fetchRecipes();
  }


  return (
    <>
      <header>
        <nav>
          <Link to="/" className="logo">
            FoodRecipe
          </Link>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="search recipe"
            />
          </form>
          <div className="links">
            <Link to="/home">Home</Link>
            <Link to="/favorites">Favorites</Link>
          </div>
        </nav>
      </header>
    </>
  );
};