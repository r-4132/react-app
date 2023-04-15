import React from "react";
import { Link } from "react-router-dom";

const Bookmarks = () => {
  const bookmarkedRecipes = JSON.parse(localStorage.getItem("bookmarkedRecipes")) || []; // // if nothing is stored in "bookmarkedRecipes", the fallback value || [] will assigns it to an empty array 

  return ( // this just basically display data stored in the local storage
    <div>
      {bookmarkedRecipes.map(recipe => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Bookmarks;
