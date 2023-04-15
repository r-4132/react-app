import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchRecipes = () => 
{
  const [searchInput, setSearchInput] = useState('');
  // const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate(); // from react-router-dom library

  const handleSearch = async (event) => 
  {
    event.preventDefault();

    try{

      const response = await axios.get('https://api.spoonacular.com/recipes/findByIngredients', 
      {
          params: {
              apiKey: process.env.REACT_APP_API_KEY,
              ingredients: searchInput, // this will change based on the user input 
              number: 2, // limit number of results to 10
              ranking: 1 // prioritize results with most missing ingredients
            }
          });
          
          navigate(`/search-results/${searchInput}`, { state: { results: response.data } }); //the first arguement will replace the url base on what the user input, the 2nd argument, state has the value of results w/c another object with a property w/c also has a value of response.data
    } 

    catch (error)
    {
      console.log(error)

    }
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

