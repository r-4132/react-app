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
    <div className="search_results_container">
      {
        results.map((recipe) =>
        {
            return(
            <div className="search_results" key={recipe.id}>
                <Link to={`/recipe/${recipe.id}`}>
                <img src={recipe.image} alt={recipe.title} />
                <p className='recipes_title'>{recipe.title}</p>
                </Link>
            </div>
            )
        })
      }
    </div>
  );
};

export default SearchResults;
