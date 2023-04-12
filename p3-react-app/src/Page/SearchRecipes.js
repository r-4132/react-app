import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchRecipes = () => 
{
  const [searchInput, setSearchInput] = useState('');
  // const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();

  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await axios.get('https://api.spoonacular.com/recipes/findByIngredients', {
        params: {
            apiKey: process.env.REACT_APP_API_KEY,
            ingredients: searchInput,
            number: 2, // limit number of results to 10
            ranking: 1 // prioritize results with most missing ingredients
        }
    });
    // setSearchResults(response.data);
    navigate(`/search-results/${searchInput}`, { state: { results: response.data } });
};

  return (
    <div>
        <form onSubmit={handleSearch}>
        <input type="text" value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchRecipes;

