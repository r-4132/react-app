import React from "react";
import { Link } from "react-router-dom";

const Bookmarks = () => {
  const bookmarkedRecipes = JSON.parse(localStorage.getItem("bookmarkedRecipes")) || []; // this has the same function as the one on Recipe.js

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
