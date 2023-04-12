import React, { useState } from "react";
import axios from "axios";

const SearchRecipes = () => 
{
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => 
  {
    event.preventDefault();
    const response = await axios.get('https://api.spoonacular.com/recipes/findByIngredients', 
    {
      params: 
      {
        apiKey: process.env.REACT_APP_API_KEY,
        ingredients: searchInput,
        number:5 , // limit number of results to 10
        ranking: 1 // prioritize results with most missing ingredients
      }
    });
    setSearchResults(response.data);
  }

  return (
    <div>
        <form onSubmit={handleSearch}>
        <input type="text" value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
        <button type="submit">Search</button>
      </form>

      {searchResults.map((recipe) => 
      (

        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <img src={`https://spoonacular.com/recipeImages/${recipe.image}`} alt={recipe.title} />
        </div>

      ))}
    </div>
  );
};

export default SearchRecipes;

