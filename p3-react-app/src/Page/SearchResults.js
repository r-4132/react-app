import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const SearchResults = () => 
{
  const location = useLocation();

  if (!location.state || !location.state.results) 
  {
    return <div>No results found</div>;
  }

  const { results } = location.state;

  return (
    <div id='recipes_container'>
      {
        results.map((recipe) =>
        {
            return(
            <div id='recipes_card' key={recipe.id}>
                <Link to={`/recipe/${recipe.id}`}>
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
