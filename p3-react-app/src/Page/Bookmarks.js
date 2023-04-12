import React from "react";

const Bookmarks = () => {
  const bookmarkedRecipes = JSON.parse(localStorage.getItem("bookmarkedRecipes")) || [];

  return (
    <div>
      {bookmarkedRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <img src={recipe.image} alt={recipe.title} />
        </div>
      ))}
    </div>
  )
}

export default Bookmarks;
