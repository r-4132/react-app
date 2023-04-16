import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const SearchResults = () => 
{
  const location = useLocation(); //useLocation is use to get the object that contains information about the current URL path and query string.

  if (!location.state || !location.state.results) 
  {
    return <h1>No results found</h1>; 
  }

  const { results } = location.state; // this is to destructurize (I'm not sure if that's a word) and store {results} and make assign new variable to results

  return (
    <div id='recipes_container'>
      {
        results.map((recipe) => //iterate each recipes found 
        {
            return(
            <div id='recipes_card' key={recipe.id}>
                <Link to={`/recipe/${recipe.id}`}>  
                {/* Link is to redirect page to a new one */}
                  <img src={recipe.image} alt={recipe.title} />
                  <p id='recipes_title'>{recipe.title}</p>
                </Link>
            </div>
            )
        })
      }
    </div>
  );
};

export default SearchResults;

