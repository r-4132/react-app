import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SearchBox } from "../components/Style";




const SearchRecipes = () => 
{
  const [searchInput, setSearchInput] = useState('');
  // const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate(); // from react-router-dom library

  const handleSearch = async (event) => 
  {
    event.preventDefault();

    try{
      const ingredientsArray = searchInput.split(' '); // will split up ingredients typed by the user into spaces

      const response = await axios.get('https://api.spoonacular.com/recipes/findByIngredients', 
      {
          params: {
              apiKey: process.env.REACT_APP_API_KEY,
              ingredients: ingredientsArray.join(','), // this will join the by comma which is required by the url
              number: 8, // limit number of results to 10
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
  <>
    <SearchBox onSubmit={handleSearch}>
      <input
        type="text"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <button type="submit">Search</button>
    </SearchBox>
  </>
);
};

export default SearchRecipes;

