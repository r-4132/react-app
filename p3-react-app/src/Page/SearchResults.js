import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => 
{
  const location = useLocation();

  if (!location.state || !location.state.results) 
  {
    return <div>No results found</div>;
  }

  const { results } = location.state;

  return (
    <div className="search_results-container">
      {
        results.map((recipe) =>
        {
            return(
            <div className="search_results" key={recipe.id}>
                <h3>{recipe.title}</h3>
                <img src={recipe.image} alt={recipe.title} />
            </div>
            )
        })
      }
    </div>
  );
};

export default SearchResults;
